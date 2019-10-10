interface UpdateSmartAccessGatewayVersionRequest {
    /**
    * 智能接入网关的所属区域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要升级的智能接入网关的版本。
    * @example `1.0.1`
    */ "VersionCode": string;
    /**
    * 智能接入网关的ID。
    * @example `sag-0ovhf732a9j*******`
    */ "SmartAGId": string;
    "OwnerId"?: number;
    /**
    * 智能接入网关设备序列号。
    * @example `sag233a234i55`
    */ "SerialNumber"?: string;
}
export { UpdateSmartAccessGatewayVersionRequest };