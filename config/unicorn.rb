root = "/home/deployer/apps/holland_law/current"
working_directory root
pid "#{root}/tmp/pids/unicorn.pid"
stderr_path "#{root}/log/unicorn.log"
stdout_path "#{root}/log/unicorn.log"

listen "/tmp/unicorn.holland_law.sock"
worker_processes 2
timeout 30