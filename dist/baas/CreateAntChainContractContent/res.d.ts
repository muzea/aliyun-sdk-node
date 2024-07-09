export interface CreateAntChainContractContentResponse {
    /**
     * 请求ID
     * @example `C407F102-062A-44B3-BBDC-E3B2718F633D`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 新建文件/文件夹名称
         * @example `newFile`
         */
        ContentName: string;
        /**
         * 上级目录ID
         * @example `R38DYDop`
         */
        ParentContentId: string;
        /**
         * 更新时间
         * @example `1564024964404`
         */
        UpdateTime: string;
        /**
         * 创建时间
         * @example `1564024964404`
         */
        CreateTime: string;
        /**
         * 合约工程ID
         * @example `bDXK1b8Z`
         */
        ProjectId: string;
        /**
         * 是否是目录
         * @example `false`
         */
        IsDirectory: boolean;
        /**
         * 新建文件/文件夹内容
         * @example `""`
         */
        Content: string;
        /**
         * 新建文件/文件夹ID
         * @example `R6XMn59e`
         */
        ContentId: string;
    };
}
