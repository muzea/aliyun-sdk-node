export interface DeleteParameterRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称。取值范围：内容限制为字母、数字、中划线、下划线，长度不能超过180字符，且不能以aliyun、acs、alibaba、alicloud、oos开头。
     * @example `MyParameter`
     */
    "Name": string;
}
