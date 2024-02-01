package com.kaleidipin.AuthorizationService.model;

public class AllUser {
        private Long id;
        private String email;
        private String password;

        private String firstname;

        private String lastname;

    public AllUser() {
    }

    private String username;


        public AllUser(Long id, String email, String password, String firstname, String lastname, String username) {
            this.id = id;
            this.email = email;
            this.password = password;
            this.firstname = firstname;
            this.lastname = lastname;
            this.username = username;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            id = id;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getFirstname() {
            return firstname;
        }

        public void setFirstname(String firstname) {
            this.firstname = firstname;
        }

        public String getLastname() {
            return lastname;
        }

        public void setLastname(String lastname) {
            this.lastname = lastname;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }
    }
