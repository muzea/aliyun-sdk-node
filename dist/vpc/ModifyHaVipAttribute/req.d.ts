interface ModifyHaVipAttributeRequest {
    /**
    * HaVip实例所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 要修改的的HaVip实例ID。
    * @example `havip-2zeo05qre24nhrqp****`
    */ "HaVipId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e0****`
    */ "ClientToken"?: string;
    /**
    * 添加HaVip的描述。
    * @example `This is my HaVip.`
    */ "Description"?: string;
    "Name"?: string;
}
export { ModifyHaVipAttributeRequest };