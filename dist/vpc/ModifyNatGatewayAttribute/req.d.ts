interface ModifyNatGatewayAttributeRequest {
    /**
    * NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  NAT网关的ID。
    * @example `ngw-xxoo123`
    */ "NatGatewayId": string;
    "OwnerId"?: number;
    /**
    * NAT网关的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `nat123`
    */ "Name"?: string;
    /**
    * NAT网关的描述信息。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `fortest`
    */ "Description"?: string;
}
export { ModifyNatGatewayAttributeRequest };