export interface UpsertCollectionPolicyRequest {
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 规则名称，最短3个字符，最长63个字符，必须以字母开头。
         * @example `your_log_policy`
         */
        policyName: string;
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
         * 是否开启。
         * @example `true`
         */
        enabled: boolean;
        /**
         * 采集规则配置。
         */
        policyConfig: {
            /**
             * 资源采集模式。如果配置all表示会采集账号下的全部实例到默认日志库，如果配置attributeMode表示会按照实例地域属性和资源标签进行过滤，如果配置instanceMode表示会按照实例ID进行过滤。
             * @example `all`
             */
            resourceMode: string;
            /**
             * 资源标签，当且仅当resourceMode为attributeMode时有效。
             * 如果资源标签过滤项为空，表示无需按照资源标签过滤，实例全部满足资源标签这一过滤条件，否则只采集资源标签属性全部满足该资源标签配置的实例。
             * 资源标签和实例所属的地域集合，共同作用，只有全部满足时才会采集该实例对象。
             * @example `{"tag1":"value1",“tag2":"value2"}`
             */
            resourceTags: any;
            /**
             * 实例所属的地域集合，当且仅当resourceMode为attributeMode时有效，支持通配符。如果地域集合过滤项为空数组，表示无需按照地域过滤，实例全部满足地域集合这一过滤条件，否则只采集地域属性在该地域集合中的实例。实例所属的地域集合和资源标签，共同作用，只有全部满足时才会采集该实例对象。
             */
            regions: string[];
            /**
             * 实例ID集合，当且仅当resourceMode为instanceMode时有效。只采集实例ID在该实例ID集合中的实例。
             */
            instanceIds: string[];
        };
        /**
         * 是否开启中心化转投，默认false。
         * @example `false`
         */
        centralizeEnabled: boolean;
        /**
         * 中心化转投配置。
         */
        centralizeConfig: {
            /**
             * 中心化转投目的地域。
             * @example `cn-beijing`
             */
            destRegion: string;
            /**
             * 中心化转投目的项目，其地域属性应和destRegion保持一致。
             * @example `your-sls-project-in-beijing`
             */
            destProject: string;
            /**
             * 中心化转投目的日志库，其地域属性应和destRegion保持一致，并且归属destProject下。
             * @example `your-sls-logstore-in-beijing`
             */
            destLogstore: string;
            /**
             * 中心化转投目的天数，当且仅当中心化转投目的日志库不存在首次创建时有效。
             * @example `your-sls-logstore-ttl`
             */
            destTTL: number;
        };
        /**
         * 当且仅当日志类型为全局日志类型时支持配置，例如productCode为sls时的场景，表示首次配置时全局日志将被采集到对应地域等。
         */
        dataConfig: {
            /**
             * 当且仅当日志类型为全局日志类型时支持配置，例如productCode为sls时的场景，表示首次配置时全局日志将被采集到对应地域。
             * @example `cn-beijing`
             */
            dataRegion: string;
        };
        /**
         * 资源目录配置，账号必须已经开通资源目录，且为管理员或者委派管理员身份
         */
        resourceDirectory: {
            /**
             * 支持该资源目录下，全选模式all和自定义模式custom
             * @example `all,custom`
             */
            accountGroupType: string;
            /**
             * 当资源目录配置为custom模式时，对应的成员账号列表
             */
            members: string[];
        };
    };
}
