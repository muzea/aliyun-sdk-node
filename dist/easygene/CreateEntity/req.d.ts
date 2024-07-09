export interface CreateEntityRequest {
    /**
     * 工作空间，获取方式请参见[创建工作空间](https://help.aliyun.com/document_detail/601899.html?spm=a2c4g.601898.0.0.2df07010mNFomF)
     * @example `test-workspace`
     */
    "Workspace": string;
    /**
     * 实体类型，长度1-64个字符
     * @example `sample`
     */
    "EntityType": string;
    /**
     * 表格元素的数组，最大字符长度为512Kb
     */
    "EntityItems": {
        /**
         * 表格元素名称
         * @example `s1`
         */
        EntityName: string;
        /**
         * 表格元素的键值对
         */
        EntityData: any;
    }[];
    /**
     * 幂等Token，最大字符长度为64
     * @example `T93cy1mMDE4OTgxNGU1ZTkK`
     */
    "ClientToken"?: string;
}
