export interface ModifyInstanceAntiBruteForceRuleRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要修改防暴力破解规则的服务器UUID。
     * 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `7cc91747-2845-40d4-bb69-c077597f****`
     */
    "Uuid": string;
    /**
     * 防暴力破解规则的ID。
     * @example `65767`
     */
    "NewRuleId": number;
}
