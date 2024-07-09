export interface GetQueryOptimizeRuleListRequest {
    /**
     * 数据库引擎，取值：
     * - **MySQL**
     * - **PolarDBMySQL**
     * - **PostgreSQL**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 实例ID，多个实例ID用逗号分隔。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceIds"?: string;
    /**
     * 备用参数。
     * @example `None`
     */
    "TagNames"?: string;
    /**
     * 实例所属地域，取值：
     * - **cn-china**：中国内地。
     * - **cn-hongkong**：中国香港。
     * - **ap-southeast-1**：新加坡。
     * 此参数只有在请求参数**InstanceIds**为空时有效。如果请求参数**InstanceIds**为空时，按照**Region**参数设置的地域获取数据，系统默认实例所属地域为**cn-china**；如果请求参数**InstanceIds**不为空时，即使设置了**Region**参数，也以**InstanceIds**所传入的第一个实例所在地域为准获取数据。
     * > 在中国内地各地域创建的实例，传入此参数时，都为**cn-china**。
     * @example `cn-china`
     */
    "Region"?: string;
}
