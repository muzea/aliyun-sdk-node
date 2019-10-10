interface CreateGatewayRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 网关PinCode, 用于确保录入者拥有该网关。
    * @example `000000`
    */ "PinCode": string;
    /**
    * 自定义网关名称。
    * @example `vme`
    */ "Name": string;
    /**
    * 网关频段ID。
    * @example `123`
    */ "FreqBandPlanGroupId": number;
    /**
    * 网关通信模式。取值：**FULL_DUPLEX**(全双工）| **HALF_DUPLEX**(半双工)。
    * @example `HALF_DUPLEX`
    */ "CommunicationMode": string;
    /**
    * 网关所在城市名称。
    * @example `杭州`
    */ "City": string;
    /**
    * 网关所在城区名称。
    * @example `滨江区`
    */ "District": string;
    /**
    * 网关所在详细地址。
    * @example `详细地址`
    */ "Address": string;
    /**
    * 网关经纬度所采用的坐标系统，可取值为**WGS_84**, **GCJ_02**。
    * @example `GCJ-02`
    */ "GisCoordinateSystem": string;
    /**
    * 网关经度。
    * @example `123.45678`
    */ "Longitude": number;
    /**
    * 网关纬度。
    * @example `23.45678`
    */ "Latitude": number;
    /**
    * 网关所在地区ID, 由http://lbs.amap.com/api/javascript-api/download定义。
    * @example `123`
    */ "AddressCode": number;
    /**
    * 网关唯一标识。
    * @example `0000000000000000`
    */ "GwEui": string;
    /**
    * 自定义网关描述信息。
    * @example `my gateway`
    */ "Description"?: string;
}
export { CreateGatewayRequest };