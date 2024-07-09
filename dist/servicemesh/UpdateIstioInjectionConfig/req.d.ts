export interface UpdateIstioInjectionConfigRequest {
    /**
     * 服务网格ID。
     * @example `ce2cdbb9d013f447180cf5ca8bb******`
     */
    "ServiceMeshId": string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 是否启用自动注入。
     * @example `true`
     */
    "EnableIstioInjection"?: boolean;
    /**
     * 是否启用SidecarSet注入。
     * @example `false`
     */
    "EnableSidecarSetInjection"?: boolean;
    /**
     * 为命名空间指定的注入版本，仅在服务网格进行金丝雀升级的过程中有效。当IstioRev不为空时，不能同时传入EnableIstioInjection或EnableSidecarSetInjection。
     * @example `canary`
     */
    "IstioRev"?: string;
    /**
     * 命名空间的数据面模式，仅在当前服务网格实例启用Ambient Mesh模式的情况下有效。取值：
     * - ambient：将命名空间的数据面模式设定为ambient模式。
     * - sidecar：将命名空间的数据面模式设定为sidecar模式。
     * @example `ambient`
     */
    "DataPlaneMode"?: string;
}
