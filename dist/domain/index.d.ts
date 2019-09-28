interface DOMAIN {
    /**
    * 查询域名DS记录
    */ QueryDSRecord(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "DSRecordList": {
            "Algorithm": number;
            "Digest": string;
            "DigestType": number;
            "KeyTag": number;
        }[];
        "RequestId": string;
    }>;
    /**
    * 提交解绑Ens地址任务
    */ SaveSingleTaskForDisassociatingEns(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.luxe`
        */ "DomainName": string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskNo": string;
    }>;
    /**
    * 查询Ens绑定地址
    */ QueryEnsAssociation(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.luxe`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "Address": string;
        "RequestId": string;
    }>;
    /**
    * 查询Art扩展信息
    */ QueryArtExtension(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.art`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "Title": string;
        "Subject": string;
        "Reference": string;
        "ObjectType": string;
        "MaterialsAndTechniques": string;
        "Maker": string;
        "InscriptionsAndMarkings": string;
        "Features": string;
        "Dimensions": string;
        "DateOrPeriod": string;
    }>;
    /**
    * 提交创建Art扩展信息任务
    */ SaveSingleTaskForSaveArtExtension(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.art`
        */ "DomainName": string;
        /**
        * 艺术品分类
        * @example `object type`
        */ "ObjectType"?: string;
        /**
        * 材质与工艺
        * @example `materials and techniques`
        */ "MaterialsAndTechniques"?: string;
        /**
        * 尺寸
        * @example `dimensions`
        */ "Dimensions"?: string;
        /**
        * 名称
        * @example `title`
        */ "Title"?: string;
        /**
        * 创作时间
        * @example `date or period`
        */ "DateOrPeriod"?: string;
        /**
        * 艺术家／创作者
        * @example `maker`
        */ "Maker"?: string;
        /**
        * 题词和标识
        * @example `inscriptions and markings`
        */ "InscriptionsAndMarkings"?: string;
        /**
        * 艺术主题
        * @example `subject`
        */ "Subject"?: string;
        /**
        * 艺术特征
        * @example `features`
        */ "Features"?: string;
        /**
        * 参考
        * @example `reference`
        */ "Reference"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskNo": string;
    }>;
    /**
    * 提交绑定Ens地址任务
    */ SaveSingleTaskForAssociatingEns(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.luxe`
        */ "DomainName": string;
        /**
        * ens地址
        * @example `0x1234567890123456789012345678901234567890`
        */ "Address": string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskNo": string;
    }>;
    /**
    * 提交修改DS记录任务
    */ SaveSingleTaskForModifyingDSRecord(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 关键标签，用于标识DNSSEC记录，为小于65536的整数值
        * @example `1`
        */ "KeyTag": number;
        /**
        * 加密算法编号，详见[Domain Name System Security (DNSSEC) Algorithm Numbers](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml)。枚举范围：
        *  - 1 RSA/MD5
        *  - 2 Diffie-Hellman
        *  - 3 DSA/SHA-1
        *  - 5 RSA/SHA-1
        *  - 6 DSA-NSEC3-SHA1
        *  - 7 RSASHA1-NSEC3-SHA1
        *  - 8 RSA/SHA-256
        *  - 10 RSA/SHA-512
        *  - 12 GOST R 34.10-2001
        *  - 13 ECDSA Curve P-256 with SHA-256
        *  - 14 ECDSA Curve P-384 with SHA-384
        *  - 15 Ed25519
        *  - 16 Ed448
        *  - 252 Reserved for Indirect Keys
        *  - 253 private algorithm
        *  - 254 private algorithm OID
        * @example `1`
        */ "Algorithm": number;
        /**
        * 摘要算法类型，详见[Delegation Signer (DS) Resource Record (RR) Type Digest Algorithms](https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml)。枚举值范围：
        *  - 1 SHA-1
        *  - 2 SHA-256
        *  - 3 GOST R 34.11-94
        *  - 4 SHA-384
        * @example `2`
        */ "DigestType": number;
        /**
        * 摘要值
        * @example `f58fa917424383934c7b0cf1a90f61d692745680fa06f5ecdbe0924e86de9598`
        */ "Digest": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskNo": string;
    }>;
    /**
    * 查询本地Ens绑定地址
    */ QueryLocalEnsAssociation(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.luxe`
        */ "DomainName": string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
    }): Promise<{
        "Address": string;
        "RequestId": string;
    }>;
    /**
    * 提交同步DS记录任务
    */ SaveSingleTaskForSynchronizingDSRecord(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskNo": string;
    }>;
    /**
    * 提交删除DS记录任务
    */ SaveSingleTaskForDeletingDSRecord(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 关键标签，用于标识DNSSEC记录，为小于65536的整数值
        * @example `1`
        */ "KeyTag": number;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskNo": string;
    }>;
    /**
    * 向分组中设置域名
    */ UpdateDomainToDomainGroup(query: {
        "RegionId"?: string;
        /**
        * 分组编号
        * @example `1234`
        */ "DomainGroupId": number;
        /**
        * 是否替换当前分组中域名。false即为向分组中新增域名，true为替换分组中原有域名
        * @example `false`
        */ "Replace": boolean;
        /**
        * 域名数据来源，枚举值范围：1 自定义输入域名 2 文件上传
        * @example `1`
        */ "DataSource": number;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * base64编码的xls、xlsx文件，域名来源为文件时该字段为必须。文件中每行一个域名，单次上传最大支持文件大小为2M
        * @example `dGVzdA==`
        */ "FileToUpload"?: string;
        "DomainName"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 提交创建DS记录任务
    */ SaveSingleTaskForAddingDSRecord(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 关键标签，用于标识DNSSEC记录，为小于65536的整数值
        * @example `1`
        */ "KeyTag": number;
        /**
        * 加密算法编号，详见[Domain Name System Security (DNSSEC) Algorithm Numbers](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml)。枚举范围：
        *  - 1 RSA/MD5
        *  - 2 Diffie-Hellman
        *  - 3 DSA/SHA-1
        *  - 5 RSA/SHA-1
        *  - 6 DSA-NSEC3-SHA1
        *  - 7 RSASHA1-NSEC3-SHA1
        *  - 8 RSA/SHA-256
        *  - 10 RSA/SHA-512
        *  - 12 GOST R 34.10-2001
        *  - 13 ECDSA Curve P-256 with SHA-256
        *  - 14 ECDSA Curve P-384 with SHA-384
        *  - 15 Ed25519
        *  - 16 Ed448
        *  - 252 Reserved for Indirect Keys
        *  - 253 private algorithm
        *  - 254 private algorithm OID
        * @example `1`
        */ "Algorithm": number;
        /**
        * 摘要算法类型，详见[Delegation Signer (DS) Resource Record (RR) Type Digest Algorithms](https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml)。枚举值范围：
        *  - 1 SHA-1
        *  - 2 SHA-256
        *  - 3 GOST R 34.11-94
        *  - 4 SHA-384
        * @example `2`
        */ "DigestType": number;
        /**
        * 摘要值
        * @example `f58fa917424383934c7b0cf1a90f61d692745680fa06f5ecdbe0924e86de9598`
        */ "Digest": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "TaskNo": string;
    }>;
    TransferInResendMailToken(query: {
        "RegionId"?: string;
        /**
        * 域名。
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip。
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 翻页遍历域名列表
    */ ScrollDomainList(query: {
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
    }): Promise<{
        "Data": {
            "Domain": {
                "DnsList": {
                    "Dns": string[];
                };
                "DomainAuditStatus": string;
                "DomainGroupId": string;
                "DomainGroupName": string;
                "DomainName": string;
                "DomainStatus": string;
                "DomainType": string;
                "Email": string;
                "ExpirationCurrDateDiff": number;
                "ExpirationDate": string;
                "ExpirationDateLong": number;
                "ExpirationDateStatus": string;
                "InstanceId": string;
                "Premium": boolean;
                "ProductId": string;
                "RegistrantOrganization": string;
                "RegistrantType": string;
                "RegistrationDate": string;
                "RegistrationDateLong": number;
                "Remark": string;
                "ZhRegistrantOrganization": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
        "ScrollId": string;
        "TotalItemNum": number;
    }>;
    /**
    * 保存域名分组
    */ SaveDomainGroup(query: {
        "RegionId"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 域名分组名称
        * @example `测试分组`
        */ "DomainGroupName"?: string;
        /**
        * 域名分组编号，当不传该参数时为创建分组，传该参数时更新域名分组名称。
        * @example `123456`
        */ "DomainGroupId"?: number;
    }): Promise<{
        "BeingDeleted": boolean;
        "CreationDate": string;
        "DomainGroupId": number;
        "DomainGroupName": string;
        "DomainGroupStatus": string;
        "ModificationDate": string;
        "RequestId": string;
        "TotalNumber": number;
    }>;
    /**
    * 查询域名分组列表
    */ QueryDomainGroupList(query: {
        "RegionId"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 域名分组名称
        * @example `默认分组`
        */ "DomainGroupName"?: string;
        /**
        * 是否展示正在删除中的域名分组，默认为false
        * @example `false`
        */ "ShowDeletingGroup"?: boolean;
    }): Promise<{
        "Data": {
            "DomainGroup": {
                "BeingDeleted": boolean;
                "CreationDate": string;
                "DomainGroupId": number;
                "DomainGroupName": string;
                "DomainGroupStatus": string;
                "TotalNumber": number;
            }[];
        };
        "RequestId": string;
    }>;
    TransferInReenterTransferAuthorizationCode(query: {
        "RegionId"?: string;
        /**
        * 域名。
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 转移密码。
        * @example `testCode`
        */ "TransferAuthorizationCode": string;
        /**
        * 接口返回信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip。
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    VerifyContactField(query: {
        "RegionId"?: string;
        /**
        * 省份
        * @example `Bei jing`
        */ "Province"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回信息的语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 城市
        * @example `Bei jing`
        */ "City"?: string;
        /**
        * 持有者名称
        * @example `zhang san`
        */ "RegistrantOrganization"?: string;
        /**
        * 国家代码 如CN，US
        * @example `CN`
        */ "Country"?: string;
        /**
        * 联系人名称
        * @example `zhang san`
        */ "RegistrantName"?: string;
        /**
        * 地址
        * @example `Rd. xitucheng`
        */ "Address"?: string;
        /**
        * 电子邮箱
        * @example `test@test.com`
        */ "Email"?: string;
        /**
        * 邮政编码
        * @example `10000`
        */ "PostalCode"?: string;
        /**
        * 电话国家代码
        * @example `86`
        */ "TelArea"?: string;
        /**
        * 电话
        * @example `13800000000`
        */ "Telephone"?: string;
        /**
        * 分机号码
        * @example `01`
        */ "TelExt"?: string;
        /**
        * 中文持有者名称
        * @example `张三`
        */ "ZhRegistrantOrganization"?: string;
        /**
        * 中文联系人名称
        * @example `张三`
        */ "ZhRegistrantName"?: string;
        /**
        * 中文省份
        * @example `北京`
        */ "ZhProvince"?: string;
        /**
        * 中文地址
        * @example `西土城路`
        */ "ZhAddress"?: string;
        /**
        * 中文城市
        * @example `北京市`
        */ "ZhCity"?: string;
        /**
        * 注册者类型，取值范围：1 个人；2 企业
        * @example `1`
        */ "RegistrantType"?: string;
        "DomainName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    SaveSingleTaskForQueryingTransferAuthorizationCode(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "TaskNo": string;
        "RequestId": string;
    }>;
    /**
    * 删除域名分组
    */ DeleteDomainGroup(query: {
        "RegionId"?: string;
        /**
        * 用户IP
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 域名分组编号
        * @example `123456`
        */ "DomainGroupId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    TransferInRefetchWhoisEmail(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    TransferInCheckMailToken(query: {
        "RegionId"?: string;
        /**
        * 邮箱中收到的Token。
        * @example `3bdbaa0e-faa2-4ad2-98f4-bcfeb0237054`
        */ "Token": string;
        /**
        * 接口返回信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip。
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "FailList": {
            "FailDomain": any[];
        };
        "RequestId": string;
        "SuccessList": {
            "SuccessDomain": string[];
        };
    }>;
    SaveSingleTaskForCancelingTransferIn(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "TaskNo": string;
        "RequestId": string;
    }>;
    SaveSingleTaskForCancelingTransferOut(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "TaskNo": string;
        "RequestId": string;
    }>;
    SaveSingleTaskForCreatingOrderTransfer(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 域名转入密码
        * @example `testCode`
        */ "AuthorizationCode": string;
        /**
        * 已经实名认证域名信息模板id
        * @example `123456`
        */ "RegistrantProfileId": number;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 是否允许溢价词域名转入，默认为false
        * @example `false`
        */ "PermitPremiumTransfer"?: boolean;
        "CouponNo"?: string;
        "UseCoupon"?: boolean;
        "PromotionNo"?: string;
        "UsePromotion"?: boolean;
    }): Promise<{
        "TaskNo": string;
        "RequestId": string;
    }>;
    QueryTransferOutInfo(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "ExpirationDate": string;
        "RequestId": string;
        "Status": number;
        "TransferAuthorizationCodeSendDate": string;
    }>;
    CheckTransferInFeasibility(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 转入密码
        * @example `test`
        */ "TransferAuthorizationCode"?: string;
    }): Promise<{
        "CanTransfer": boolean;
        "ProductId": string;
        "RequestId": string;
    }>;
    SaveBatchTaskForCreatingOrderTransfer(query: {
        "RegionId"?: string;
        "OrderTransferParam": string[];
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        "CouponNo"?: string;
        "UseCoupon"?: boolean;
        "PromotionNo"?: string;
        "UsePromotion"?: boolean;
    }): Promise<{
        "TaskNo": string;
        "RequestId": string;
    }>;
    QueryRegistrantProfileRealNameVerificationInfo(query: {
        "RegionId"?: string;
        /**
        * 域名信息模板编号
        * @example `123456`
        */ "RegistrantProfileId": number;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 是否获取实名认证图片
        * @example `false`
        */ "FetchImage"?: boolean;
    }): Promise<{
        "IdentityCredentialNo": string;
        "IdentityCredentialType": string;
        "ModificationDate": string;
        "RegistrantProfileId": number;
        "RequestId": string;
        "SubmissionDate": string;
    }>;
    SaveSingleTaskForApprovingTransferOut(query: {
        "RegionId"?: string;
        /**
        * 域名
        * @example `域名`
        */ "DomainName": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "TaskNo": string;
        "RequestId": string;
    }>;
    QueryTransferInByInstanceId(query: {
        "RegionId"?: string;
        /**
        * 实例编号
        * @example `S20181T0WLI85212`
        */ "InstanceId": string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "DomainName": string;
        "Email": string;
        "ExpirationDate": string;
        "InstanceId": string;
        "ModificationDate": string;
        "NeedMailCheck": boolean;
        "ProgressBarType": number;
        "RequestId": string;
        "ResultCode": string;
        "ResultDate": string;
        "ResultMsg": string;
        "SimpleTransferInStatus": string;
        "Status": number;
        "SubmissionDate": string;
        "UserId": string;
        "WhoisMailStatus": boolean;
    }>;
    ConfirmTransferInEmail(query: {
        "RegionId"?: string;
        /**
        * 邮箱
        * @example `test@test.com`
        */ "Email": string;
        "DomainName": string[];
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
    }): Promise<{
        "FailList": {
            "FailDomain": string[];
        };
        "RequestId": string;
        "SuccessList": {
            "SuccessDomain": any[];
        };
    }>;
    PollTaskResult(query: {
        "RegionId"?: string;
        /**
        * 页码
        * @example `1`
        */ "PageNum": number;
        /**
        * 分页大小
        * @example `20`
        */ "PageSize": number;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 任务编号
        * @example `75addb07-28a3-450e-b5ec-test`
        */ "TaskNo"?: string;
        /**
        * 域名
        * @example `test.com`
        */ "DomainName"?: string;
        /**
        * 业务编号
        * @example `S20181T0WLI85212`
        */ "InstanceId"?: string;
        /**
        * 任务结果类型，枚举值范围：2 成功；3 失败
        * @example `2`
        */ "TaskResultStatus"?: number;
    }): Promise<{
        "CurrentPageNum": number;
        "Data": {
            "TaskDetail": {
                "CreateTime": string;
                "DomainName": string;
                "ErrorMsg": string;
                "InstanceId": string;
                "TaskDetailNo": string;
                "TaskNo": string;
                "TaskStatus": string;
                "TaskStatusCode": number;
                "TaskType": string;
                "TaskTypeDescription": string;
                "TryCount": number;
                "UpdateTime": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
        "TotalItemNum": number;
        "TotalPageNum": number;
    }>;
    AcknowledgeTaskResult(query: {
        "RegionId"?: string;
        "TaskDetailNo": string[];
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
        "Result": number;
    }>;
    QueryTransferInList(query: {
        "RegionId"?: string;
        /**
        * 页码
        * @example `1`
        */ "PageNum": number;
        /**
        * 分页大小
        * @example `20`
        */ "PageSize": number;
        /**
        * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户ip
        * @example `127.0.0.1`
        */ "UserClientIp"?: string;
        /**
        * 提交转入结束时间
        * @example `1514428524669`
        */ "SubmissionStartDate"?: number;
        /**
        * 提交转入开始时间
        * @example `1514428524669`
        */ "SubmissionEndDate"?: number;
        /**
        * 域名，前缀匹配
        * @example `test.com`
        */ "DomainName"?: string;
        /**
        * 转移状态，枚举值范围：INIT 提交转入，AUTHORIZATION 授权转入（邮箱验证），NAME_VERIFICATION 命名审核，PASSWORD_VERIFICATION 转移密码验证，PENDING 转入处理中，SUCCESS 转入成功，FAIL 转入失败
        * @example `INIT`
        */ "SimpleTransferInStatus"?: string;
    }): Promise<{
        "CurrentPageNum": number;
        "Data": {
            "TransferInInfo": {
                "DomainName": string;
                "Email": string;
                "ExpirationDate": string;
                "InstanceId": string;
                "ModificationDate": string;
                "NeedMailCheck": boolean;
                "ProgressBarType": number;
                "ResultMsg": string;
                "SimpleTransferInStatus": string;
                "Status": number;
                "SubmissionDate": string;
                "UserId": string;
                "WhoisMailStatus": boolean;
            }[];
        };
        "NextPage": boolean;
        "PageSize": number;
        "PrePage": boolean;
        "RequestId": string;
        "TotalItemNum": number;
        "TotalPageNum": number;
    }>;
    BatchFuzzyMatchDomainSensitiveWord(query: {
        "RegionId"?: string;
        "Keyword": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    CancelDomainVerification(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "ActionType": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    CancelQualificationVerification(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "QualificationType": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    CheckMaxYearOfServerLock(query: {
        "RegionId"?: string;
        "DomainName": string;
        "CheckAction": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    CheckProcessingServerLockApply(query: {
        "RegionId"?: string;
        "DomainName": string;
        "FeePeriod"?: number;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DeleteEmailVerification(query: {
        "RegionId"?: string;
        "Email": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DeleteRegistrantProfile(query: {
        "RegionId"?: string;
        "RegistrantProfileId": number;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    EmailVerified(query: {
        "RegionId"?: string;
        "Email": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    ListEmailVerification(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "BeginCreateTime"?: number;
        "EndCreateTime"?: number;
        "Email"?: string;
        "VerificationStatus"?: number;
        "PageNum"?: number;
        "PageSize"?: number;
        "UserClientIp"?: string;
    }): Promise<{}>;
    LookupTmchNotice(query: {
        "RegionId"?: string;
        "ClaimKey": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryDomainAdminDivision(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryDomainByInstanceId(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    QueryDomainSuffix(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryEmailVerification(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "Email"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryFailingReasonListForQualification(query: {
        "RegionId"?: string;
        "QualificationType": string;
        "InstanceId": string;
        "Limit": number;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    QueryQualificationDetail(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "QualificationType": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    QueryRegistrantProfiles(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "RegistrantOrganization"?: string;
        "UserClientIp"?: string;
        "RegistrantProfileId"?: number;
        "DefaultRegistrantProfile"?: boolean;
        "PageNum"?: number;
        "PageSize"?: number;
        "ZhRegistrantOrganization"?: string;
        "RegistrantType"?: string;
        "RealNameStatus"?: string;
        "Email"?: string;
        "RegistrantProfileType"?: string;
    }): Promise<{}>;
    QueryServerLock(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "InstanceId"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryTaskDetailHistory(query: {
        "RegionId"?: string;
        "TaskNo": string;
        "PageSize": number;
        "Lang"?: string;
        "UserClientIp"?: string;
        "DomainName"?: string;
        "DomainNameCursor"?: string;
        "TaskStatus"?: number;
        "TaskDetailNoCursor"?: string;
    }): Promise<{}>;
    QueryTaskDetailList(query: {
        "RegionId"?: string;
        "TaskNo": string;
        "PageNum": number;
        "PageSize": number;
        "TaskStatus"?: number;
        "Lang"?: string;
        "DomainName"?: string;
        "InstanceId"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryTaskList(query: {
        "RegionId"?: string;
        "PageNum": number;
        "PageSize": number;
        "UserClientIp"?: string;
        "Lang"?: string;
        "BeginCreateTime"?: number;
        "EndCreateTime"?: number;
    }): Promise<{}>;
    RegistrantProfileRealNameVerification(query: {
        "RegionId"?: string;
        "RegistrantProfileID": number;
        "IdentityCredential": string;
        "IdentityCredentialNo": string;
        "IdentityCredentialType": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    ResetQualificationVerification(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveBatchDomainRemark(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "Remark"?: string;
        "InstanceIds"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    SaveBatchTaskForCreatingOrderActivate(query: {
        "RegionId"?: string;
        "OrderActivateParam": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
        "CouponNo"?: string;
        "UseCoupon"?: boolean;
        "PromotionNo"?: string;
        "UsePromotion"?: boolean;
    }): Promise<{}>;
    SaveBatchTaskForCreatingOrderRedeem(query: {
        "RegionId"?: string;
        "OrderRedeemParam": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
        "CouponNo"?: string;
        "UseCoupon"?: boolean;
        "PromotionNo"?: string;
        "UsePromotion"?: boolean;
    }): Promise<{}>;
    SaveBatchTaskForCreatingOrderRenew(query: {
        "RegionId"?: string;
        "OrderRenewParam": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
        "CouponNo"?: string;
        "UseCoupon"?: boolean;
        "PromotionNo"?: string;
        "UsePromotion"?: boolean;
    }): Promise<{}>;
    SaveBatchTaskForDomainNameProxyService(query: {
        "RegionId"?: string;
        "DomainName": string[];
        "Status": boolean;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveBatchTaskForUpdateProhibitionLock(query: {
        "RegionId"?: string;
        "DomainName": string[];
        "Status": boolean;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveBatchTaskForUpdatingContactInfoByNewContact(query: {
        "RegionId"?: string;
        "ContactType": string;
        "RegistrantType": string;
        "DomainName": string[];
        "Address"?: string;
        "UserClientIp"?: string;
        "Lang"?: string;
        "City"?: string;
        "RegistrantOrganization"?: string;
        "RegistrantName"?: string;
        "Province"?: string;
        "Country"?: string;
        "Email"?: string;
        "PostalCode"?: string;
        "TelArea"?: string;
        "Telephone"?: string;
        "TelExt"?: string;
        "ZhCity"?: string;
        "ZhRegistrantOrganization"?: string;
        "ZhRegistrantName"?: string;
        "ZhProvince"?: string;
        "ZhAddress"?: string;
        "TransferOutProhibited"?: boolean;
    }): Promise<{}>;
    SaveRegistrantProfile(query: {
        "RegionId"?: string;
        "DefaultRegistrantProfile"?: boolean;
        "Country"?: string;
        "UserClientIp"?: string;
        "Lang"?: string;
        "RegistrantProfileId"?: number;
        "City"?: string;
        "RegistrantOrganization"?: string;
        "RegistrantName"?: string;
        "Province"?: string;
        "Address"?: string;
        "Email"?: string;
        "PostalCode"?: string;
        "TelArea"?: string;
        "Telephone"?: string;
        "TelExt"?: string;
        "ZhRegistrantOrganization"?: string;
        "ZhRegistrantName"?: string;
        "ZhProvince"?: string;
        "ZhAddress"?: string;
        "ZhCity"?: string;
        "RegistrantType"?: string;
        "RegistrantProfileType"?: string;
    }): Promise<{}>;
    SaveSingleTaskForCreatingOrderActivate(query: {
        "RegionId"?: string;
        "DomainName": string;
        "ZhRegistrantName"?: string;
        "Lang"?: string;
        "SubscriptionDuration"?: number;
        "RegistrantProfileId"?: number;
        "EnableDomainProxy"?: boolean;
        "PermitPremiumActivation"?: boolean;
        "AliyunDns"?: boolean;
        "Dns1"?: string;
        "UserClientIp"?: string;
        "ZhCity"?: string;
        "ZhRegistrantOrganization"?: string;
        "Country"?: string;
        "Dns2"?: string;
        "ZhProvince"?: string;
        "ZhAddress"?: string;
        "City"?: string;
        "RegistrantOrganization"?: string;
        "RegistrantName"?: string;
        "Province"?: string;
        "Address"?: string;
        "Email"?: string;
        "PostalCode"?: string;
        "TelArea"?: string;
        "Telephone"?: string;
        "TelExt"?: string;
        "RegistrantType"?: string;
        "TrademarkDomainActivation"?: boolean;
        "CouponNo"?: string;
        "UseCoupon"?: boolean;
        "PromotionNo"?: string;
        "UsePromotion"?: boolean;
    }): Promise<{}>;
    SaveSingleTaskForCreatingOrderRenew(query: {
        "RegionId"?: string;
        "DomainName": string;
        "SubscriptionDuration": number;
        "CurrentExpirationDate": number;
        "UserClientIp"?: string;
        "Lang"?: string;
        "CouponNo"?: string;
        "UseCoupon"?: boolean;
        "PromotionNo"?: string;
        "UsePromotion"?: boolean;
    }): Promise<{}>;
    SaveSingleTaskForDeletingDnsHost(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "DnsName": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    SaveSingleTaskForDomainNameProxyService(query: {
        "RegionId"?: string;
        "DomainName": string;
        "Status": boolean;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveSingleTaskForModifyingDnsHost(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "DnsName": string;
        "Ip": string[];
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    SaveSingleTaskForSynchronizingDnsHost(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    SaveSingleTaskForUpdateProhibitionLock(query: {
        "RegionId"?: string;
        "DomainName": string;
        "Status": boolean;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveSingleTaskForUpdatingContactInfo(query: {
        "RegionId"?: string;
        "DomainName": string;
        "RegistrantProfileId": number;
        "ContactType": string;
        "UserClientIp"?: string;
        "Lang"?: string;
        "InstanceId"?: string;
        "AddTransferLock"?: boolean;
    }): Promise<{}>;
    SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredential(query: {
        "RegionId"?: string;
        "IdentityCredential": string;
        "IdentityCredentialNo": string;
        "IdentityCredentialType": string;
        "DomainName": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID(query: {
        "RegionId"?: string;
        "DomainName": string;
        "InstanceId": string;
        "RegistrantProfileId": number;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveTaskForUpdatingRegistrantInfoByIdentityCredential(query: {
        "RegionId"?: string;
        "TelArea": string;
        "Telephone": string;
        "RegistrantType": string;
        "DomainName": string[];
        "IdentityCredentialType": string;
        "IdentityCredentialNo": string;
        "IdentityCredential": string;
        "TransferOutProhibited": boolean;
        "PostalCode"?: string;
        "Address"?: string;
        "UserClientIp"?: string;
        "Lang"?: string;
        "City"?: string;
        "RegistrantOrganization"?: string;
        "RegistrantName"?: string;
        "Province"?: string;
        "Email"?: string;
        "Country"?: string;
        "TelExt"?: string;
        "ZhCity"?: string;
        "ZhRegistrantOrganization"?: string;
        "ZhRegistrantName"?: string;
        "ZhProvince"?: string;
        "ZhAddress"?: string;
    }): Promise<{}>;
    SubmitEmailVerification(query: {
        "RegionId"?: string;
        "Email": string;
        "Lang"?: string;
        "SendIfExist"?: boolean;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryDomainByDomainName(query: {
        "RegionId"?: string;
        "DomainName": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    FuzzyMatchDomainSensitiveWord(query: {
        "RegionId"?: string;
        "Keyword": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    GetQualificationUploadPolicy(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryContactInfo(query: {
        "RegionId"?: string;
        "DomainName": string;
        "ContactType": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    QueryDnsHost(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryFailReasonForDomainRealNameVerification(query: {
        "RegionId"?: string;
        "DomainName": string;
        "RealNameVerificationAction": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    QueryTaskInfoHistory(query: {
        "RegionId"?: string;
        "PageSize": number;
        "UserClientIp"?: string;
        "Lang"?: string;
        "BeginCreateTime"?: number;
        "EndCreateTime"?: number;
        "CreateTimeCursor"?: number;
        "TaskNoCursor"?: string;
    }): Promise<{}>;
    SaveBatchTaskForTransferProhibitionLock(query: {
        "RegionId"?: string;
        "DomainName": string[];
        "Status": boolean;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveSingleTaskForCreatingOrderRedeem(query: {
        "RegionId"?: string;
        "DomainName": string;
        "CurrentExpirationDate": number;
        "UserClientIp"?: string;
        "Lang"?: string;
        "CouponNo"?: string;
        "UseCoupon"?: boolean;
        "PromotionNo"?: string;
        "UsePromotion"?: boolean;
    }): Promise<{}>;
    SaveSingleTaskForTransferProhibitionLock(query: {
        "RegionId"?: string;
        "DomainName": string;
        "Status": boolean;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SaveTaskForSubmittingDomainDelete(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    SaveTaskForUpdatingRegistrantInfoByRegistrantProfileID(query: {
        "RegionId"?: string;
        "RegistrantProfileId": number;
        "DomainName": string[];
        "TransferOutProhibited": boolean;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    VerifyEmail(query: {
        "RegionId"?: string;
        "Token": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    CheckDomain(query: {
        "RegionId"?: string;
        "DomainName": string;
        "FeeCommand"?: string;
        "FeeCurrency"?: string;
        "FeePeriod"?: number;
        "Lang"?: string;
    }): Promise<{}>;
    CheckDomainSunriseClaim(query: {
        "RegionId"?: string;
        "DomainName": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    ListServerLock(query: {
        "RegionId"?: string;
        "DomainName"?: string;
        "EndStartDate"?: number;
        "BeginStartDate"?: number;
        "PageNum"?: number;
        "PageSize"?: number;
        "Lang"?: string;
        "LockProductId"?: string;
        "ServerLockStatus"?: number;
        "StartExpireDate"?: number;
        "EndExpireDate"?: number;
        "UserClientIp"?: string;
    }): Promise<{}>;
    QueryAdvancedDomainList(query: {
        "RegionId"?: string;
        "PageNum": number;
        "PageSize": number;
        "EndExpirationDate"?: number;
        "UserClientIp"?: string;
        "Lang"?: string;
        "StartExpirationDate"?: number;
        "ProductDomainType"?: string;
        "DomainGroupId"?: number;
        "DomainNameSort"?: boolean;
        "DomainStatus"?: number;
        "EndLength"?: number;
        "Excluded"?: string;
        "ExcludedPrefix"?: boolean;
        "ExcludedSuffix"?: boolean;
        "ExpirationDateSort"?: boolean;
        "Form"?: number;
        "KeyWord"?: string;
        "KeyWordPrefix"?: boolean;
        "KeyWordSuffix"?: boolean;
        "ProductDomainTypeSort"?: boolean;
        "RegistrationDateSort"?: boolean;
        "StartLength"?: number;
        "TradeType"?: number;
        "Suffixs"?: string;
        "StartRegistrationDate"?: number;
        "EndRegistrationDate"?: number;
    }): Promise<{}>;
    QueryChangeLogList(query: {
        "RegionId"?: string;
        "PageNum": number;
        "PageSize": number;
        "UserClientIp"?: string;
        "Lang"?: string;
        "DomainName"?: string;
        "StartDate"?: number;
        "EndDate"?: number;
    }): Promise<{}>;
    QueryDomainList(query: {
        "RegionId"?: string;
        "PageNum": number;
        "PageSize": number;
        "EndExpirationDate"?: number;
        "StartExpirationDate"?: number;
        "UserClientIp"?: string;
        "Lang"?: string;
        "QueryType"?: string;
        "StartRegistrationDate"?: number;
        "EndRegistrationDate"?: number;
        "DomainName"?: string;
        "OrderByType"?: string;
        "OrderKeyType"?: string;
        "ProductDomainType"?: string;
        "DomainGroupId"?: string;
    }): Promise<{}>;
    QueryDomainRealNameVerificationInfo(query: {
        "RegionId"?: string;
        "DomainName": string;
        "UserClientIp"?: string;
        "Lang"?: string;
        "FetchImage"?: boolean;
    }): Promise<{}>;
    QueryFailReasonForRegistrantProfileRealNameVerification(query: {
        "RegionId"?: string;
        "RegistrantProfileID": number;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    ResendEmailVerification(query: {
        "RegionId"?: string;
        "Email": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    SaveBatchTaskForModifyingDomainDns(query: {
        "RegionId"?: string;
        "DomainName": string[];
        "AliyunDns": boolean;
        "UserClientIp"?: string;
        "Lang"?: string;
        "DomainNameServer"?: string[];
    }): Promise<{}>;
    SaveBatchTaskForUpdatingContactInfoByRegistrantProfileId(query: {
        "RegionId"?: string;
        "RegistrantProfileId": number;
        "ContactType": string;
        "DomainName": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
        "TransferOutProhibited"?: boolean;
    }): Promise<{}>;
    SaveSingleTaskForCreatingDnsHost(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "DnsName": string;
        "Ip": string[];
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    CancelTask(query: {
        "RegionId"?: string;
        "TaskNo": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
}
export default DOMAIN;
