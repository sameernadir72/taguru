export const contractadd = '0x3ca003e71829c5dad05aa7ebe4ad1b1c5ffb1f2f';

export const contractabi = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [{ indexed: true, internalType: 'address', name: 'candidate', type: 'address' }],
        name: 'NewCv',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: '_mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' }
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'displayCv',
        outputs: [
            {
                components: [
                    { internalType: 'string', name: 'Name', type: 'string' },
                    { internalType: 'address', name: 'addr', type: 'address' },
                    { internalType: 'string', name: 'email', type: 'string' },
                    { internalType: 'uint256', name: 'phone', type: 'uint256' },
                    { internalType: 'string', name: 'persStat', type: 'string' },
                    { internalType: 'string', name: 'keySkills', type: 'string' },
                    { internalType: 'string', name: 'hobbies', type: 'string' },
                    { internalType: 'string', name: 'references', type: 'string' }
                ],
                internalType: 'struct TAGuru.PersDetails',
                name: '',
                type: 'tuple'
            },
            {
                components: [
                    { internalType: 'string', name: 'jobTitle', type: 'string' },
                    { internalType: 'string', name: 'compNam', type: 'string' },
                    { internalType: 'string', name: 'loc', type: 'string' },
                    { internalType: 'uint256', name: 'startDate', type: 'uint256' },
                    { internalType: 'uint256', name: 'endDate', type: 'uint256' },
                    { internalType: 'string', name: 'achvResp', type: 'string' }
                ],
                internalType: 'struct TAGuru.Employement',
                name: '',
                type: 'tuple'
            },
            {
                components: [
                    { internalType: 'string', name: 'schlName', type: 'string' },
                    { internalType: 'uint256', name: 'stDate', type: 'uint256' },
                    { internalType: 'uint256', name: 'enDate', type: 'uint256' },
                    { internalType: 'string', name: 'desc', type: 'string' }
                ],
                internalType: 'struct TAGuru.Education',
                name: '',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'addedValue', type: 'uint256' }
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    { internalType: 'string', name: 'Name', type: 'string' },
                    { internalType: 'address', name: 'addr', type: 'address' },
                    { internalType: 'string', name: 'email', type: 'string' },
                    { internalType: 'uint256', name: 'phone', type: 'uint256' },
                    { internalType: 'string', name: 'persStat', type: 'string' },
                    { internalType: 'string', name: 'keySkills', type: 'string' },
                    { internalType: 'string', name: 'hobbies', type: 'string' },
                    { internalType: 'string', name: 'references', type: 'string' }
                ],
                internalType: 'struct TAGuru.PersDetails',
                name: '_pd',
                type: 'tuple'
            },
            {
                components: [
                    { internalType: 'string', name: 'jobTitle', type: 'string' },
                    { internalType: 'string', name: 'compNam', type: 'string' },
                    { internalType: 'string', name: 'loc', type: 'string' },
                    { internalType: 'uint256', name: 'startDate', type: 'uint256' },
                    { internalType: 'uint256', name: 'endDate', type: 'uint256' },
                    { internalType: 'string', name: 'achvResp', type: 'string' }
                ],
                internalType: 'struct TAGuru.Employement',
                name: '_emp',
                type: 'tuple'
            },
            {
                components: [
                    { internalType: 'string', name: 'schlName', type: 'string' },
                    { internalType: 'uint256', name: 'stDate', type: 'uint256' },
                    { internalType: 'uint256', name: 'enDate', type: 'uint256' },
                    { internalType: 'string', name: 'desc', type: 'string' }
                ],
                internalType: 'struct TAGuru.Education',
                name: '_edu',
                type: 'tuple'
            }
        ],
        name: 'inputCvDet',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    { internalType: 'string', name: 'Name', type: 'string' },
                    { internalType: 'address', name: 'addr', type: 'address' },
                    { internalType: 'string', name: 'email', type: 'string' },
                    { internalType: 'uint256', name: 'phone', type: 'uint256' },
                    { internalType: 'string', name: 'persStat', type: 'string' },
                    { internalType: 'string', name: 'keySkills', type: 'string' },
                    { internalType: 'string', name: 'hobbies', type: 'string' },
                    { internalType: 'string', name: 'references', type: 'string' }
                ],
                internalType: 'struct TAGuru.PersDetails',
                name: '_pd',
                type: 'tuple'
            },
            {
                components: [
                    { internalType: 'string', name: 'jobTitle', type: 'string' },
                    { internalType: 'string', name: 'compNam', type: 'string' },
                    { internalType: 'string', name: 'loc', type: 'string' },
                    { internalType: 'uint256', name: 'startDate', type: 'uint256' },
                    { internalType: 'uint256', name: 'endDate', type: 'uint256' },
                    { internalType: 'string', name: 'achvResp', type: 'string' }
                ],
                internalType: 'struct TAGuru.Employement',
                name: '_emp',
                type: 'tuple'
            },
            {
                components: [
                    { internalType: 'string', name: 'schlName', type: 'string' },
                    { internalType: 'uint256', name: 'stDate', type: 'uint256' },
                    { internalType: 'uint256', name: 'enDate', type: 'uint256' },
                    { internalType: 'string', name: 'desc', type: 'string' }
                ],
                internalType: 'struct TAGuru.Education',
                name: '_edu',
                type: 'tuple'
            }
        ],
        name: 'updateCvDet',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
