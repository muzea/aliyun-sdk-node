export interface ModifyDatabaseInstanceParameterRequest {
    /**
     * 指定的轻量数据库实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量数据库实例ID。
     * @example `db-38263fa955774501a2ae1bdaed6f****`
     */
    "DatabaseInstanceId": string;
    /**
     * 数据库参数及其值的JSON串，参数的值为字符串类型。格式：{"参数名称1":"参数值1","参数名称2":"参数值2"...}。
     * @example `{"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}`
     */
    "Parameters": string;
    /**
     * 修改参数是否重启数据库，取值范围：
     * - true：强制重启（若修改的参数当中，有需要重启的参数，则必须传入true，否则修改将不生效）。
     * - false：不强制重启。
     * 默认值：false。
     * @example `false`
     */
    "ForceRestart"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
