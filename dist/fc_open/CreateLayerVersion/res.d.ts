export interface CreateLayerVersionResponse {
    /**
     * 层的名称。
     * @example `MyLayer`
     */
    layerName: string;
    /**
     * 层的版本。
     * @example `1`
     */
    version: number;
    /**
     * 版本的描述信息。
     * @example `the first layer`
     */
    description: string;
    /**
     * 层的代码包信息。
     */
    code: any;
    /**
     * 层的代码包大小，单位为Byte。
     * @example `421`
     */
    codesize: number;
    /**
     * 层代码包的crc64校验码，根据**ECMA-182标准**计算得出。
     * @example `2825179536350****`
     */
    codeChecksum: string;
    /**
     * 层版本的创建时间，格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-01-01T11:08:00Z`
     */
    createTime: string;
    /**
     * 层的访问模式。
     * 取值0代表私有，取值1代表公有。官方公共层默认为公有，自定义层可以设置为私有或者公有。
     * @example `0`
     */
    acl: number;
    /**
     * 层支持的运行时环境列表。
     */
    compatibleRuntime: string[];
    /**
     * 层资源的名称。
     * @example `xxxxxxxx#Layer-name#1`
     */
    arn: string;
}
