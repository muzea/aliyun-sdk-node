interface ModifyCloudConnectNetworkRequest {
    /**
    * 云连接网的所属区域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 云连接网ID。
    * @example `ccn-l9340rlu5ens*****`
    */ "CcnId": string;
    "OwnerId"?: number;
    /**
    * 云连接网的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http:// `或` https://`开头。
    * @example `ccn名称`
    */ "Name"?: string;
    /**
    * 云连接网的描述。
    * 长度为2-256个字符，必须以字母或中文开头，但不能以`http:// `或 `https://`开头。
    * @example `ccn描述`
    */ "Description"?: string;
    "CidrBlock"?: string;
    "InterworkingStatus"?: string;
}
export { ModifyCloudConnectNetworkRequest };