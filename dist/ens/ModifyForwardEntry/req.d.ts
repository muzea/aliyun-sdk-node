export interface ModifyForwardEntryRequest {
    /**
     * 待修改的DNAT条目的ID。
     * @example `dnat-5tfjp3537mi6iokl59g5c****`
     */
    "ForwardEntryId": string;
    /**
     * DNAT规则的名称。长度为2~128个字符，不能以`http://`或`https://`开头。
     * @example `test0`
     */
    "ForwardEntryName"?: string;
    /**
     * DNAT的探测端口，需要在内网端口范围内。默认值为空。
     * @example `80`
     */
    "HealthCheckPort"?: number;
}
