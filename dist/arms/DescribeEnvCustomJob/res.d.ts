export interface DescribeEnvCustomJobResponse {
    /**
     * Id of the request
     * @example `6A9AEA84-7186-4D8D-B498-4585C6A2****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 环境实例ID。
         * @example `env-xxxxx`
         */
        EnvironmentId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 自定义job名称。
         * @example `customJob1`
         */
        CustomJobName: string;
        /**
         * 请求参数**encryptYaml**为`true`，则返回base64编码后的YAML串。否则返回明文YAML串。
         * @example `参见补充说明。`
         */
        ConfigYaml: string;
        /**
         * 状态：
         * - run
         * - stop
         * @example `run`
         */
        Status: string;
    };
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
