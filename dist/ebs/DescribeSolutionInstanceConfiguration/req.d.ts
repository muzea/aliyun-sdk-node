export interface DescribeSolutionInstanceConfigurationRequest {
    /**
     * 解决方案ID。
     * @example `sln-xxxxx`
     */
    "SolutionId": string;
    /**
     * 地域。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 配置查询参数。
     */
    "Parameters"?: {
        /**
         * 模板中已定义的参数的名称。
         * > Parameters为可选参数。若指定了Parameters，则ParameterKey为必选参数。
         * @example `***`
         */
        ParameterKey: string;
        /**
         * 模板中已定义的参数的取值。
         * > Parameters为可选参数。若指定了Parameters，则ParameterValue为必选参数。
         * @example `***`
         */
        ParameterValue: string;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
