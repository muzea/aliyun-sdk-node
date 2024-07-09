export interface ListDNADBRequest {
    /**
     * DNA库ID列表。⼀次建议最多查10个，ID之间⽤半角逗号（,）分隔。
     * @example `2288c6ca184c0e47098a5b665e2a12****,78dc866518b843259669df58ed30****`
     */
    "DBIds"?: string;
}
