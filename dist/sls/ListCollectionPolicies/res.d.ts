export interface ListCollectionPoliciesResponse {
    /**
     * 总数据条数。
     * @example `1`
     */
    totalCount: number;
    /**
     * 当前页数据条数。
     * @example `1`
     */
    currentCount: number;
    /**
     * 当前查询条件下按照分页配置返回的规则数据。
     */
    data: {
        /**
         * 产品编码。
         * @example `oss`
         */
        productCode: string;
        /**
         * 日志类型编码。
         * @example `access_log`
         */
        dataCode: string;
        /**
         * 规则名称。
         * @example `your_log_policy`
         */
        policyName: string;
        /**
         * 是否开启。
         * @example `true`
         */
        enabled: boolean;
        /**
         * 采集规则配置。
         */
        policyConfig: {
            /**
             * 资源采集模式。
             * @example `all`
             */
            resourceMode: string;
            /**
             * 实例所属的地域集合。
             */
            regions: string[];
            /**
             * 实例ID集合。
             */
            instanceIds: string[];
            /**
             * 资源标签。
             * @example `{"tag1":"value1","tag2":"value2"}`
             */
            resourceTags: any;
        };
        /**
         * 是否开启中心化转投。
         * @example `false`
         */
        centralizeEnabled: boolean;
        /**
         * 中心化转投配置。
         */
        centralizeConfig: {
            /**
             * 中心化转投目的地域。
             * @example `cn-beijing
            `
             */
            destRegion: string;
            /**
             * 中心化转投目的项目。
             * @example `your-sls-project-in-beijing
            `
             */
            destProject: string;
            /**
             * 中心化转投目的日志库。
             * @example `your-sls-logstore-in-beijing
            `
             */
            destLogstore: string;
            /**
             * 中心化转投目的存储天数。
             * @example `your-sls-logstore-ttl
            `
             */
            destTTL: number;
        };
        /**
         * 资源目录配置, 如有配置，否则为空
         */
        resourceDirectory: {
            /**
             * 在该资源目录下，全选模式all或自定义模式custom
             * @example `all,custom`
             */
            accountGroupType: string;
            /**
             * 当资源目录配置为custom模式时，对应的成员账号列表
             */
            members: string[];
        };
        /**
         * 当且仅当日志类型为全局日志类型时支持配置，例如productCode为sls时的场景。否则为空。
         */
        dataConfig: {
            /**
             * 当且仅当日志类型为全局日志类型时支持的配置，例如productCode为sls时的场景，表示首次配置时全局日志将被采集到对应地域。
             * @example `cn-hangzhou`
             */
            dataRegion: string;
            /**
             * 当且仅当日志类型为全局日志类型时有效，例如productCode为sls时的场景，如果为空，表示日志被采集到该账号在特定dataRegion下的默认专属的Project中。
             * @example `""`
             */
            dataProject: string;
        };
        /**
         * 是否是内置规则策略，内置规则不允许修改、删除。
         * @example `false`
         */
        internalPolicy: boolean;
        /**
         * 规则所属的账号阿里云账号Uid，如果该规则由资源目录管理员或者资源目录委派管理员创建，则为其阿里云账号Uid。
         * @example `148***********50`
         */
        policyUid: string;
    }[];
    /**
     * 当前查询条件下返回的统计数据。
     */
    statistics: {
        /**
         * 产品编码。
         * @example `oss`
         */
        productCode: string;
        /**
         * 规则来源列表。
         */
        policySourceList: {
            /**
             * 规则所属的账号阿里云账号Uid，如果该规则由资源目录管理员或者资源目录委派管理员创建，则为其阿里云账号Uid。
             * @example `148***********50`
             */
            policyUid: string;
            /**
             * 规则名称
             * @example `policy_name1_from148`
             */
            policyName: string;
        }[];
    }[];
}
