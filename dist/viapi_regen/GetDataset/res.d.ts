export interface GetDatasetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `8D41EDD3-36D1-0408-94C9-8EEEA7F2FFE7`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 数据集ID。
         * @example `296`
         */
        Id: number;
        /**
         * 数据集归属。取值如下：
         * - ALIYUN：用户选择自己本地的文件上传
         * - USER：用户选择自己OSS的数据上传
         * @example `ALIYUN`
         */
        OwnerType: string;
        /**
         * 数据集存放的OSS路径。
         * @example `oss://viapi-regen-hangzhou-prod/daily/data/296/`
         */
        OssUrl: string;
        /**
         * 创建时间。
         * @example `1631762186000`
         */
        GmtCreate: number;
        /**
         * 数据集名称。
         * @example `fenlei`
         */
        Name: string;
        /**
         * 数据集描述。
         * @example `test12`
         */
        Description: string;
        /**
         * 数据集中数据总数。
         * @example `147`
         */
        Total: number;
    };
}
