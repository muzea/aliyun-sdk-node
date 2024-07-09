export interface AttachEaisEiRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待绑定的ECS或ECI实例ID。
     * @example `i-bp14ws9hbt1oe0u9****`
     */
    "ClientInstanceId": string;
    /**
     * EAIS实例ID。不设置该参数时，会自动查询用户账号下符合条件的可绑定实例，并选择查询出的第一个实例进行绑定。
     * @example `eais-hzu00xufs1c8j5nn****`
     */
    "EiInstanceId"?: string;
    /**
     * EAIS实例的规格。当未指定`EiInstanceId`参数时，可以设置该参数来限制绑定的EAIS实例规格；指定了`EiInstanceId`参数时，该参数不生效。取值范围：
     * - eais.ei-a6.4xlarge
     * - eais.ei-a6.2xlarge
     * - eais.ei-a6.xlarge
     * - eais.ei-a6.large
     * @example `eais.ei-a6.2xlarge`
     */
    "EiInstanceType"?: string;
}
