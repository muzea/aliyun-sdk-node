export interface ListPublicKeysResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 用户公钥信息列表
     */
    PublicKeys: {
        /**
         * 公钥名称
         * @example `mykey`
         */
        KeyName: string;
        /**
         * 公钥分组
         * @example `mygroup`
         */
        KeyGroup: string;
        /**
         * 经过编码的公钥内容，默认编码格式：Base64
         * @example `verify_30d89ccb0905c8c7882c1d14a991954b`
         */
        Content: string;
        /**
         * 公钥描述信息
         * @example `测试使用`
         */
        Description: string;
        /**
         * 公钥上传时间
         * @example `2024-06-11T14:26:48+08:00`
         */
        UploadTime: string;
    }[];
    /**
     * 记录总数
     * @example `100`
     */
    TotalCount: number;
    /**
     * 查询列表的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数
     * @example `10`
     */
    PageSize: number;
}
