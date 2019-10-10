interface ModifyBandwidthPackageAttributeRequest {
    /**
    * NAT带宽包所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  NAT带宽包的ID。
    * @example `bwp-s6lmotmkkxxxxxxxx`
    */ "BandwidthPackageId": string;
    "OwnerId"?: number;
    /**
    *  NAT带宽包的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `NATABC`
    */ "Name"?: string;
    /**
    *  NAT带宽包的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `This is NAT.`
    */ "Description"?: string;
}
export { ModifyBandwidthPackageAttributeRequest };