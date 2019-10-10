interface ModifyCenBandwidthPackageAttributeRequest {
    "RegionId"?: string;
    /**
    *  带宽包的ID。
    * @example `cenbwp-4c2zaavbvh5fx****`
    */ "CenBandwidthPackageId": string;
    "OwnerId"?: number;
    /**
    * 带宽包的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    *  带宽包的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `带宽包`
    */ "Description"?: string;
}
export { ModifyCenBandwidthPackageAttributeRequest };