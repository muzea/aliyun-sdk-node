export interface ListImagesResponse {
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 执行命令并获取结果的过程是否成功。取值范围：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次请求条件下的数据总量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 每页条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 镜像信息列表。
     */
    Images: {
        /**
         * 镜像类型。
         * @example `VM`
         */
        ImageType: string;
        /**
         * 镜像ID。
         * @example `m-bp181x855551ww5yq****`
         */
        ImageId: string;
        AppId: string;
        /**
         * 镜像名称。
         * @example `app-image`
         */
        Name: string;
        /**
         * 镜像版本。
         * @example `v1.0`
         */
        Version: string;
        /**
         * 镜像描述。
         * @example `应用测试镜像。`
         */
        Description: string;
        /**
         * 创建时间。
         * @example `2022-12-09T07:06:34Z`
         */
        CreateTime: string;
    }[];
}
