export interface GetProblemPreviewResponse {
    /**
     * requestId
     * @example `4361a0e1-6747-4834-96ce-0c2840fd3812`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * object
         */
        problem: {
            /**
             * 故障名称
             * @example `故障名称`
             */
            problemName: string;
            /**
             * HANDLING	故障状态
             * HANDLING    处理中 RECOVERED  已恢复
             * REPLAYING   复盘中
             * REPLAYED     已复盘 CANCEL        已取消
             * @example `HANDLING`
             */
            problemStatus: string;
            /**
             * 故障等级 1=P1 2=P2 3=P3 4=P4
             * @example `P2`
             */
            problemLevel: string;
            /**
             * 发现时间
             * @example `2021-02-21 00:00:00`
             */
            discoverTime: string;
            /**
             * 恢复时间
             * @example `2021-02-21 00:00:00`
             */
            recoveryTime: string;
            /**
             * 关联服务名称
             * @example `服务A`
             */
            serviceName: string;
            /**
             * 进展摘要
             * @example `摘要123`
             */
            progressSummary: string;
            /**
             * 初步原因
             * @example `原因A`
             */
            preliminaryReason: string;
            /**
             * 主要处理人
             * @example `小明`
             */
            mainHandlerName: string;
            /**
             * 主要处理人Id
             * @example `231`
             */
            mainHandlerId: string;
            /**
             * 是否手动
             * @example `true`
             */
            isManual: boolean;
            /**
             * 是否升级
             * @example `true`
             */
            isUpgrade: boolean;
            /**
             * 故障Id
             * @example `123123`
             */
            problemId: number;
            /**
             * 关联服务ID
             * @example `213123`
             */
            relatedServiceId: number;
            /**
             * 创建时间
             * @example `2021-02-21 00:00:00`
             */
            createTime: string;
            /**
             * 富文本id
             * @example `12312`
             */
            progressSummaryRichTextId: number;
            /**
             * 应急协同组
             */
            coordinationGroups: {
                /**
                 * 服务组名称
                 * @example `服务组A`
                 */
                serviceGroupName: string;
                /**
                 * 服务Id
                 * @example `1231`
                 */
                serviceGroupId: number;
                /**
                 * 服务组Maison
                 * @example `服务组描述`
                 */
                serviceGroupDescription: string;
            }[];
            /**
             * 影响服务
             */
            effectionServices: {
                /**
                 * 影响服务名称
                 * @example `服务B`
                 */
                serviceName: string;
                /**
                 * 影响服务Id
                 * @example `1231`
                 */
                serviceId: number;
            }[];
        };
        /**
         * 语音
         */
        voice: {
            /**
             * 数量
             * @example `12`
             */
            count: number;
            /**
             * 用户组
             */
            users: {
                /**
                 * 用户
                 * @example `用户名称`
                 */
                username: string;
            }[];
        };
        /**
         * 邮箱
         */
        mail: {
            /**
             * 数量
             * @example `123`
             */
            count: number;
            /**
             * 用户组
             */
            users: {
                /**
                 * 用户名称
                 * @example `用户名称`
                 */
                username: string;
            }[];
        };
        /**
         * 短信
         */
        sms: {
            /**
             * 数量
             * @example `12`
             */
            count: number;
            /**
             * 用户组
             */
            users: {
                /**
                 * 用户名称
                 * @example `用户名称`
                 */
                username: string;
            }[];
        };
        /**
         * webhook
         */
        webhook: {
            /**
             * 数量
             * @example `32`
             */
            count: number;
            /**
             * 服务组
             */
            serviceGroups: {
                /**
                 * 服务名称
                 * @example `服务名称`
                 */
                serviceName: string;
            }[];
        };
        /**
         * 升级前数据
         * @example `最新升级前等级`
         */
        upBeforeData: string;
        /**
         * 升级后数据
         * @example `最新升级后等级`
         */
        upAfterData: string;
        /**
         * 降级前数据
         * @example `最新降级前等级`
         */
        deBeforeData: string;
        /**
         * 降级后数据
         * @example `最新降级后等级`
         */
        deAfterData: string;
    };
}
