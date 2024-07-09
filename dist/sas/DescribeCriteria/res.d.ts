export interface DescribeCriteriaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8E6DDACF-99AF-5939-AFFD-FCCD3B01E724`
     */
    RequestId: string;
    /**
     * 资产查询条件的信息。
     */
    CriteriaList: {
        /**
         * 查询条件的类型。取值：
         * - **input**：需要手动输入查询字段。
         * - **select**：需要从下拉列表中选择查询条件的子类型。
         * @example `input`
         */
        Type: string;
        /**
         * 对应的查询条件的名称。
         * - **internetIp**：公网IP。
         * - **intranetIp**：私网IP。
         * - **instanceName**：实例名称。
         * - **instanceId**：实例ID。
         * - **vpcInstanceId**：所属VPC ID。
         * - **osName**：操作系统。
         * - **osType**：系统类型。
         * - **hcStatus**：是否有基线问题。
         * - **vulStatus**：是否有漏洞问题。
         * - **alarmStatus**：是否有安全告警。
         * - **riskStatus**：是否存在风险。
         * - **clientStatus**：是否在线。
         * - **runningStatus**：开机状态。
         * - **tagName**：标签名称。
         * - **groupName**：分组名称。
         * - **regionId**：地域。
         * - **importance**：资产重要性。
         * - **exposedStatus**：是否是暴露服务器。
         * - **authVersion**：授权版本。
         * - **flag**：云厂商。
         * - **ipList**：IP列表。
         * - **uuidList**：UUID。
         * - **tagKeyValue**：ECS标签。
         * @example `internetIp`
         */
        Name: string;
        /**
         * 输入的模糊匹配值对应的资产的具体属性值。
         * @example `47.96.XX.XX`
         */
        Values: string;
        /**
         * 输入的模糊匹配值对应的资产的具体结构化属性值。JSON格式，包含以下字段：
         * - **vendor**：供应商
         * - **regionIds**：支持地域
         * @example `[{"vendor":0,"regionIds":{"default":["ap-southeast-1","ap-northeast-2","ap-southeast-3","ap-southeast-5","ap-southeast-7","me-central-1"]}},{"vendor":1,"regionIds":{"default":["outside-of-aliyun"]}}]`
         */
        MultiValues: string;
    }[];
}
