interface BindVbrRequest {
    /**
    * 智能接入网关实例所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-jed****************`
    */ "SmartAGId": string;
    /**
    * 要绑定的边界路由器实例ID。
    * @example `vbr-shf************`
    */ "VbrId": string;
    /**
    * 要绑定的边界路由器实例所属的地域ID。
    * @example `cn-hangzhou`
    */ "VbrRegionId": string;
    "OwnerId"?: number;
}
export { BindVbrRequest };