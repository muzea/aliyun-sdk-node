export interface QueryDomainGroupListResponse {
    /**
     * 唯一请求标识码。
     * @example `80011ABC-F573-4795-B0E8-377BFBBA3422`
     */
    RequestId: string;
    Data: {
        /**
         * 域名分组列表。
         */
        DomainGroup: {
            /**
             * 是否正在删除中。超过1000个域名的分组删除为异步过程，需要系统处理一段时间，在此期间内该字段为**true**。
             * @example `false`
             */
            BeingDeleted: boolean;
            /**
             * 域名分组状态。取值：
             * - **PROCESSING**：处理中；
             * - **COMPLETE**：已完成。
             * > 通过文件设置分组、替换超过1000个域名的分组等情况下为异步过程，需要等待系统处理，此状态下该字段为**PROCESSING**。
             * @example `COMPLETE`
             */
            DomainGroupStatus: string;
            /**
             * 域名分组编号。
             * @example `-1`
             */
            DomainGroupId: string;
            /**
             * 域名分组名称。
             * @example `未分组`
             */
            DomainGroupName: string;
            /**
             * 域名分组修改时间。
             * @example `2018-04-02 15:59:06`
             */
            ModificationDate: string;
            /**
             * 域名数量。
             * @example `20`
             */
            TotalNumber: number;
            /**
             * 域名分组创建时间。
             * @example `2018-04-02 15:59:06`
             */
            CreationDate: string;
        }[];
    };
}
