// knexfile.js
export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root', // Tên người dùng MySQL của bạn
            password: '', // Mật khẩu MySQL của bạn
            database: 'student' // Tên cơ sở dữ liệu mà bạn đã tạo
        },
        migrations: {
            directory: './src/migrations', // Đường dẫn đến thư mục chứa file migration
        },
        seeds: {
            directory: './src/seeds', // Đường dẫn đến thư mục chứa file seed
        }
    },
    production: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root', // Tên người dùng MySQL của bạn
            password: '', // Mật khẩu MySQL của bạn
            database: 'student' // Tên cơ sở dữ liệu mà bạn đã tạo
        },
        migrations: {
            directory: './src/migrations',
        },
        seeds: {
            directory: './src/seeds',
        }
    }
};
