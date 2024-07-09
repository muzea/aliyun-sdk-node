export interface CreateWorkspaceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `DBECB972-A04A-090F-89BB-960316F8B071`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 空间ID。
         * @example `78`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1634262448874`
         */
        GmtCreate: number;
        /**
         * 空间名称。
         * @example `wyqtest`
         */
        Name: string;
        /**
         * 空间描述。
         * @example `wyqtest`
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
