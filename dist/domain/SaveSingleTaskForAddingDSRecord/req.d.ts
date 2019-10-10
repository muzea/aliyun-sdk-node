interface SaveSingleTaskForAddingDSRecordRequest {
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
}
export { SaveSingleTaskForAddingDSRecordRequest };