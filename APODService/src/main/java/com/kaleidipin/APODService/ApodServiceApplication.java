package com.kaleidipin.APODService;

import com.kaleidipin.APODService.filter.UserFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableDiscoveryClient
public class ApodServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApodServiceApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

//	@Bean
//	public FilterRegistrationBean getBean(){
//		FilterRegistrationBean bean = new FilterRegistrationBean();
//		bean.setFilter(new UserFilter());
//		bean.addUrlPatterns("/api/v1/*");
//		return bean;
//	}

	@Bean
	public FilterRegistrationBean getBean(){
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new UserFilter());
		filterRegistrationBean.addUrlPatterns("/api/v1/*");
		return filterRegistrationBean;
	}
}
