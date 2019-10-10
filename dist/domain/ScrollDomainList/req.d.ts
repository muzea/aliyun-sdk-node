interface ScrollDomainListRequest {
    "RegionId"?: string;
    /**
    * 分页大小
    * @example `50`
    */ "PageSize"?: number;
    /**
    * 注册日期范围查询结束时间，UTC时间1970年1月1日0点距离现在的毫秒数
    * @example `1541520000000`
    */ "EndExpirationDate"?: number;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 接口返回信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 到期日期范围查询开始时间，UTC时间1970年1月1日0点距离现在的毫秒数
    * @example `1541520000000`
    */ "StartExpirationDate"?: number;
    /**
    * 域名类型，枚举值范围：New gTLD；gTLD；ccTLD;other
    * @example `gTLD`
    */ "ProductDomainType"?: string;
    /**
    * 域名分组id
    * @example `123456`
    */ "DomainGroupId"?: number;
    /**
    * 域名状态，枚举值范围：0 全部； 1 急需续费； 2 急需赎回； 3 正常； 4 正在转出万网； 5 域名持有者信息修改中； 6 未实名认证； 7 审核失败，重新实名认证； 8 审核中
    * @example `0`
    */ "DomainStatus"?: number;
    /**
    * 域名长度范围查询结束长度
    * @example `3`
    */ "EndLength"?: number;
    /**
    * 排除关键字
    * @example `test`
    */ "Excluded"?: string;
    /**
    * 开头排除关键字
    * @example `false`
    */ "ExcludedPrefix"?: boolean;
    /**
    * 结束排除关键字
    * @example `true`
    */ "ExcludedSuffix"?: boolean;
    /**
    * 组成，参见组成表
    * @example `1`
    */ "Form"?: number;
    /**
    * 关键字
    * @example `test`
    */ "KeyWord"?: string;
    /**
    * 开头关键字
    * @example `true`
    */ "KeyWordPrefix"?: boolean;
    /**
    * 结束关键字
    * @example `false`
    */ "KeyWordSuffix"?: boolean;
    /**
    * 域名长度范围查询开始长度
    * @example `0`
    */ "StartLength"?: number;
    /**
    * 发布状态，枚举值范围：2 已发布一口价；3 已发布线上议价；4 已发布竞价；6 已发布带价push；-1 未发布域名交易
    * @example `-1`
    */ "TradeType"?: number;
    /**
    * 查询后缀列表，以逗号“,”隔开
    * @example `com`
    */ "Suffixs"?: string;
    /**
    * 注册日期范围查询开始时间，UTC时间1970年1月1日0点距离现在的毫秒数
    * @example `1541520000000`
    */ "StartRegistrationDate"?: number;
    /**
    * 注册日期范围查询结束时间，UTC时间1970年1月1日0点距离现在的毫秒数
    * @example `1541520000000`
    */ "EndRegistrationDate"?: number;
    /**
    * 翻页遍历id
    * @example `test`
    */ "ScrollId"?: string;
}
export { ScrollDomainListRequest };