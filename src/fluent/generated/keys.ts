import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '8d19e86bdbbc4424bbca67c3aa81138b'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '98b75e22175a438184e11f69a57d070f'
                    }
                }
            }
        }
    }
}
