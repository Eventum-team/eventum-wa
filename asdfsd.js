deployment_view :: 
 
    elements { 

        environmental_element_types { 
            node; 
            container; 
            mobile_phone; 
            localStorage; 
            desktop; 
        } 

        operating_systems { 
            ubuntu; 
            android; 
        } 

        execution_environments { 
            puma; 
            postgresql; 
            gunicorn; 
            laravel; 
            tomee; 
            go_server; 
            nodejs; 
            mongodb; 
            flask_server; 
            mysql; 
        } 

        software_element ev_media_db_prod (component ev_media_db); 
        software_element ev_groups_db_prod (component ev_groups_db); 
        software_element ev_comments_db_prod (component ev_comments_db); 
        software_element ev_users_db_prod (component ev_users_db); 
        software_element ev_auth_db_prod (component ev_auth_db); 
        software_element ev_events_db_prod (component ev_events_db); 
            
        software_element ev_media_ms_prod (component ev_media_ms); 
        software_element ev_groups_ms_prod (component ev_groups_ms); 
        software_element ev_comments_ms_prod (component ev_comments_ms); 
        software_element ev_users_ms_prod (component ev_users_ms); 
        software_element ev_auth_ms_prod (component ev_auth_ms); 
        software_element ev_events_ms_prod (component ev_events_ms); 
            
        software_element ev_api_gateway_prod (component ev_api_gateway); 
        software_element ev_storage_prod (component ev_storage); 
        software_element ev_wa_prod (component ev_wa); 
        software_element ev_ma_prod (component ev_ma); 

        environmental_element node user_node { 
            ip: '54.85.121.208'; 
            dns: 'ec2-54-85-121-208.compute-1.amazonaws.com'; 
            operating_system: ubuntu; 
            cpu: '1xcore'; 
            ram: 1 gB; 
            storage_capacity: 8 gB; 
            provider: 'AWS'; 
        } 
            
        environmental_element node auth_node { 
            ip: '54.145.162.109'; 
            dns: 'ec54.145.162.109.compute-1.amazonaws.com'; 
            operating_system: ubuntu; 
            cpu: '1xcore'; 
            ram: 1 gB; 
            storage_capacity: 8 gB; 
            provider: 'AWS'; 
        } 
            
        environmental_element node events_node { 
            ip: '3.91.177.144'; 
            dns: 'ec3.91.177.144.compute-1.amazonaws.com'; 
            operating_system: ubuntu; 
            cpu: '1xcore'; 
            ram: 1 gB; 
            storage_capacity: 8 gB; 
            provider: 'AWS'; 
        } 
            
        environmental_element node media_node { 
            ip: '3.95.151.201'; 
            dns: 'ec3.95.151.201.compute-1.amazonaws.com'; 
            operating_system: ubuntu; 
            cpu: '1xcore'; 
            ram: 1 gB; 
            storage_capacity: 8 gB; 
            provider: 'AWS'; 
        } 
            
        environmental_element node groups_node { 
            ip: '3.95.60.32'; 
            dns: 'ec3.95.60.32.compute-1.amazonaws.com'; 
            operating_system: ubuntu; 
            cpu: '1xcore'; 
            ram: 1 gB; 
            storage_capacity: 8 gB; 
            provider: 'AWS'; 
        } 
            
        environmental_element node comments_node { 
            ip: '54.85.121.208'; 
            dns: 'ec2-54.85.121.208.compute-1.amazonaws.com'; 
            operating_system: ubuntu; 
            cpu: '4xcore'; 
            ram: 12 gB; 
            storage_capacity: 500 gB; 
            provider: 'no aplica'; 
        } 
            
        environmental_element node api_node { 
            ip: '54.85.121.208'; 
            dns: 'ec2-54-85-121-208.compute-1.amazonaws.com'; 
            operating_system: ubuntu; 
            cpu: '4xcore'; 
            ram: 12 gB; 
            storage_capacity: 500 gB; 
            provider: 'No aplica'; 
        } 


        environmental_element container ev_user_ms_cont {} 
        environmental_element container ev_media_ms_cont {} 
        environmental_element container ev_group_ms_cont {} 
        environmental_element container ev_events_ms_cont {} 
        environmental_element container ev_auth_ms_cont {} 
        environmental_element container ev_comments_ms_cont {} 

        environmental_element container ev_user_db_cont {} 
        environmental_element container ev_media_db_cont {} 
        environmental_element container ev_group_db_cont {} 
        environmental_element container ev_events_db_cont {} 
        environmental_element container ev_auth_db_cont {} 
        environmental_element container ev_comments_db_cont {} 

        environmental_element container ev_wa_cont {} 

        environmental_element container ev_api_cont {} 

        environmental_element mobile_phone ev_phone { 
            operating_system: android; 
        } 
            

        environmental_element localStorage ev_local_storage {} 
    } 

    relations { 

        ee: user_node contains ee: ev_user_ms_cont; 
        ee: user_node contains ee: ev_user_db_cont; 
        ee: media_node contains ee: ev_media_ms_cont; 
        ee: media_node contains ee: ev_media_db_cont; 
        ee: comments_node contains ee: ev_comments_ms_cont; 
        ee: comments_node contains ee: ev_comments_db_cont; 
        ee: group_node contains ee: ev_group_ms_cont; 
        ee: group_node contains ee: ev_group_db_cont; 
        ee: events_node contains ee: ev_events_ms_cont; 
        ee: events_node contains ee: ev_events_db_cont; 
        ee: auth_node contains ee: ev_auth_ms_cont; 
        ee: auth_node contains ee: ev_auth_db_cont; 
        ee: api_node contains ee: ev_api_cont;  
        ee: api_node contains ee: ev_local_storage; 
            
        se: ev_groups_ms_prod deployed_in ee: ev_group_ms_cont (execution_environment flask_server)(port 5000); 
        se: ev_events_ms_prod deployed_in ee: ev_events_ms_cont (execution_environment go_server)(port 8000); 
        se: ev_auth_ms_prod deployed_in ee: ev_auth_ms_cont (execution_environment gunicorn)(port 8000); 
        se: ev_comments_ms_prod deployed_in ee: ev_comments_ms_cont (execution_environment laravel)(port 8000); 
        se: ev_media_ms_prod deployed_in ee: ev_media_ms_cont (execution_environment nodejs)(port 3001); 
        se: ev_users_ms_prod deployed_in ee: ev_user_ms_cont (execution_environment puma)(port 3000); 
                            
        se: ev_groups_db_prod deployed_in ee: ev_group_db_cont (execution_environment mysql)(port 3306); 
        se: ev_events_db_prod deployed_in ee: ev_events_db_cont (execution_environment postgresql)(port 5432); 
        se: ev_auth_db_prod deployed_in ee: ev_auth_db_cont (execution_environment postgresql)(port 5432); 
        se: ev_comments_db_prod deployed_in ee: ev_comments_db_cont (execution_environment mysql)(port 3306); 
        se: ev_media_db_prod deployed_in ee: ev_media_db_cont (execution_environment mongodb)(port 27017); 
        se: ev_users_db_prod deployed_in ee: ev_user_db_cont (execution_environment postgresql)(port 5432); 

            
        se: ev_api_gateway_prod deployed_in ee: ev_api_cont (execution_environment nodejs)(port 3000); 
        se: ev_storage_prod deployed_in ee: ev_local_storage; 

        se: ev_wa_prod deployed_in ee: ev_wa_cont (execution_environment nodejs)(port 3000); 
        se: ev_ma_prod deployed_in ee: ev_phone; 
    } 
:: 