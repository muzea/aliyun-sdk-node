export interface DescribeFieldResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BCDE6498-83CC-50A1-8307-3D5A539C42F8`
     */
    RequestId: string;
    /**
     * 全局配置的名称。
     * @example `soar_filed_tags`
     */
    Name: string;
    /**
     * 配置的内容。
     * @example `["ip","name","hostinfo","md5"]`
     */
    Fields: string;
}
