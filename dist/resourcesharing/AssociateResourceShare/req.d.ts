export interface AssociateResourceShareRequest {
    /**
     * 共享单元ID。
     * @example `rs-6GRmdD3X****`
     */
    "ResourceShareId": string;
    /**
     * 资源列表。
     */
    "Resources"?: {
        /**
         * 共享资源类型。
         * N的取值范围：1~5，即每次最多添加5个共享资源。
         * 支持共享的资源类型，请参见[支持资源共享的云服务](~~450526~~)。
         * > `Resources.N.ResourceId`与`Resources.N.ResourceType`成对出现，需要同时设置。
         * @example `VSwitch`
         */
        ResourceType: string;
        /**
         * 共享资源ID。
         * N的取值范围：1~5，即每次最多添加5个共享资源。
         * > Resources.N.ResourceId与Resources.N.ResourceType成对出现，需要同时设置。
         * @example `vsw-bp183p93qs667muql****`
         */
        ResourceId: string;
    }[];
    /**
     * 资源使用者。
     * @example `172050525300****`
     */
    "Targets"?: string[];
    /**
     * 共享权限名称。为空时，系统自动绑定资源类型关联的默认权限。具体信息，请参见[权限库](~~465474~~)。
     */
    "PermissionNames"?: string[];
    /**
     * 资源使用者属性。
     * > 仅当资源使用者为阿里云服务时可以设置该参数。
     */
    "TargetProperties"?: {
        /**
         * 资源使用者ID。
         * > `TargetProperties.N.TargetId`与`TargetProperties.N.Property`成对出现，需要同时设置。
         * @example `172050525300****`
         */
        TargetId: string;
        /**
         * 资源使用者属性参数。例如：您可以设置资源共享的时间段。`timeRangeType`取值：
         * - timeRange：指定时间段。
         * - day：全天。
         * > `TargetProperties.N.TargetId`与`TargetProperties.N.Property`成对出现，需要同时设置。
         * @example `{
            "timeRange":{
                "timeRangeType":"timeRange",
                "beginAtTime":"00:00",
                "timezone":"UTC+8",
                "endAtTime":"19:59"
            }
        }`
         */
        Property: string;
    }[];
}
