export interface ModifyParameterRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-hzjasdyuoo`
     */
    "DBInstanceId": string;
    /**
     * 参数类型：
     * - **compute**：计算层参数；
     * - **storage**：存储层参数。
     * @example `compute`
     */
    "ParamLevel"?: string;
    /**
     * 参数为符合JSON格式的字符串，MapKey表示参数名称，MapValue表示参数值。可修改的具体参数是动态增删的，请通过[DescribeParameterTemplates](~~196856~~)接口获取，一次可以传入多个参数。
     * @example `{"CONN_POOL_BLOCK_TIMEOUT":6000}`
     */
    "Parameters": string;
    /**
     * 客户端请求Token，任意唯一字符串。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    "ClientToken"?: string;
}
