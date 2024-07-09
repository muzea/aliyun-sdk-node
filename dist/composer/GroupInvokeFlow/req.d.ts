export interface GroupInvokeFlowRequest {
    /**
     * 需要运行的工作流ID
     * @example `lc-uf6axpwfcw4ubx`
     */
    "FlowId": string;
    /**
     * 本次批量执行的分组名，不同执行分组之间不能重复
     * @example `1632117849243`
     */
    "GroupKey": string;
    /**
     * 该分组执行所需的数据，为JSON字符串，格式为：`{"Items": []}`。Items数组每一项为单次执行的参数。单次执行参数的编写方式和InvokeFlow的Data参数一致
     * @example `{\"Items\":[{\"resourceId\":\"i-bp1383wskmaa65duviwh\",\"regionId\":\"cn-hangzhou\",\"resourceType\":\"ACS::ECS::Instance\"}],\"Source\":\"CloudConfig\"}`
     */
    "Data": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符
     * @example `abcdefghijklmn`
     */
    "ClientToken": string;
    /**
     * 该组执行包含的执行数，需要和Data.Items数组中的个数一致
     * @example `1`
     */
    "TotalCount": number;
    /**
     * 为该分组下的每次执行打标签，格式为JSON数组，数组内为对应执行的标签对象。数组包含的标签对象个数需与TotalCount一致
     * @example `[{\"key1\":\"value1\",\"key2\":\"value2\"}]`
     */
    "Tags"?: string;
}
