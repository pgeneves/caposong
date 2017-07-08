package com.pgen.caposong;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.ISO8601DateFormat;
import org.jsondoc.spring.boot.starter.EnableJSONDoc;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EnableJSONDoc
public class CapoSongApplication extends WebMvcConfigurerAdapter {
    private static final Logger LOG = LoggerFactory.getLogger(CapoSongApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(CapoSongApplication.class, args);
    }

    /**
     * Special resource handler to get files from the src directory
     * Avoid restart of application while dev
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Resource handler to download music resources
        registry.addResourceHandler("/song_music/**")
                .addResourceLocations("file:song_data/music/")
                .setCachePeriod(0);
        // Resource handler to reload web content from sources at dev time
        registry.addResourceHandler("/**")
                .addResourceLocations("file:caposong-server/src/main/resources/static/")
                .setCachePeriod(0);
        super.addResourceHandlers(registry);
    }

    @Bean
    public HttpMessageConverters customConverters() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new ISO8601DateFormat());
        MappingJackson2HttpMessageConverter jackson = new MappingJackson2HttpMessageConverter();
        jackson.setObjectMapper(objectMapper);
        return new HttpMessageConverters(jackson);
    }

    // see https://stackoverflow.com/questions/27381781/java-spring-boot-how-to-map-my-my-app-root-to-index-html
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("redirect:/index.html");
    }
}
