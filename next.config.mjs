/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URL: 'https://jqwjojqhrsdqmzltklec.supabase.co',
DB_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxd2pvanFocnNkcW16bHRrbGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTQ2NDIsImV4cCI6MjAzMjg5MDY0Mn0.cd-VFxolfUTBAcHM14aQ_7gw2wQO7qljvQrP2zYE6VA'
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        }
    }
};

export default nextConfig;
