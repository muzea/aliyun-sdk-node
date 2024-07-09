export interface GetWorkspaceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `96AE7FBF-3E7D-0595-B999-78B31B8C2619`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 生产空间ID。
         * @example `70`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1631762186000`
         */
        GmtCreate: number;
        /**
         * 生产空间名称。
         * @example `test1`
         */
        Name: string;
        /**
         * 生产空间描述。
         * @example `test1`
         */
        Description: string;
        /**
         * 生产空间类型。取值如下：
         * - COMMON_CLASSIFY：通用分类
         * - COMMON_DETECT：通用检测
         * - COMMON_INSTANCE_SEGMENT：通用实例分割
         * @example `COMMON_CLASSIFY`
         */
        Type: string;
    };
}
