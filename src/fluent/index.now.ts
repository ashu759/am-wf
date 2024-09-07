import '@servicenow/sdk/global'
import { BusinessRule, ClientScript, Table, StringColumn, DateColumn } from '@servicenow/sdk/core'
import { showStateUpdate } from '../server/script.js'

export const x_snc_ashu_party_to_do = Table({
    name: 'x_snc_ashu_party_to_do',
    schema: {
        task: StringColumn({ label: 'Task', maxLength: 120 }),
        deadline: DateColumn({ label: 'Deadline', maxLength: 40 }),
        short_description: StringColumn({ label: 'Short Description', maxLength: 200 }),
    },
    label: 'Ashu Party To Do',
})

//creates a client script that pops up 'Table loaded successfully!!' message everytime todo record is loaded
ClientScript({
    $id: Now.ID['cs0'],
    name: 'my_client_script',
    table: 'incident',
    active: true,
    applies_extended: false,
    global: true,
    ui_type: 'all',
    description: 'Custom client script generated by Now SDK',
    messages: '',
    isolate_script: false,
    type: 'onLoad',
    script: script`function onLoad() {
        g_form.addInfoMessage("Table loaded successfully!!")
    }`,
})

//creates a business rule that pops up state change message whenever a todo record is updated
BusinessRule({
    $id: Now.ID['br0'],
    action: ['update'],
    table: 'incident',
    script: showStateUpdate,
    name: 'LogStateChange',
    order: 100,
    when: 'after',
    active: true,
    abort_action: false,
})
