interface CreateCommonBandwidthPackageRequest {
    /**
    * 共享带宽所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 共享带宽的带宽峰值，单位为Mbps。
    * @example `5`
    */ "Bandwidth": number;
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    * @example `123`
    */ "Zone"?: string;
    /**
    * @example `123`
    */ "ISP"?: string;
    /**
    * 共享带宽的名称。
    * 长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `test123`
    */ "Name"?: string;
    /**
    * 共享带宽的描述信息。
    * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `abc`
    */ "Description"?: string;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-001****`
    */ "ClientToken"?: string;
    /**
    * 资源组ID。
    * @example `rg-acfmxazdjdhd****`
    */ "ResourceGroupId"?: string;
    /**
    * 共享带宽的保底百分比，取值为**20**，即保底百分比的范围是20%。
    * 当**InternetChargeType**取值**PayBy95**时需指定此参数。
    * >仅中国站支持此参数。
    * @example `20`
    */ "Ratio"?: number;
    /**
    * 共享带宽的计费方式，取值：
    * - **PayByBandwidth**（默认值）：按带宽计费。
    * - **PayBy95**：按增强型95计费。
    * 如需**PayByTraffic**计费方式，请提交工单。
    *
    *
    * @example `PayByTraffic`
    */ "InternetChargeType"?: string;
}
export { CreateCommonBandwidthPackageRequest };