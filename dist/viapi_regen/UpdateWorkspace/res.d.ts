export interface UpdateWorkspaceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `55927643-E937-038B-819F-77BD3DE7FB79`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 生产空间ID。
         * @example `78`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1634262448874`
         */
        GmtCreate: number;
        /**
         * 生产空间名称。
         * @example `WYQTEST`
         */
        Name: string;
        /**
         * 生产空间描述。
         * @example `WYQTEST描述`
         */
        Description: string;
        /**
         * 生产空间类型。类型取值如下：
         * - COMMON_CLASSIFY：通用分类
         * - COMMON_DETECT：通用检测
         * - COMMON_INSTANCE_SEGMENT：通用实例分割
         * @example `COMMON_CLASSIFY`
         */
        Type: string;
    };
}
