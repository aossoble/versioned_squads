/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * InvalidThreshold: 'Invalid threshold'
 *
 * @category Errors
 * @category generated
 */
export class InvalidThresholdError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'InvalidThreshold'
  constructor() {
    super('Invalid threshold')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidThresholdError)
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new InvalidThresholdError())
createErrorFromNameLookup.set(
  'InvalidThreshold',
  () => new InvalidThresholdError()
)

/**
 * MemberNotFound: 'Member not found'
 *
 * @category Errors
 * @category generated
 */
export class MemberNotFoundError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'MemberNotFound'
  constructor() {
    super('Member not found')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MemberNotFoundError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new MemberNotFoundError())
createErrorFromNameLookup.set('MemberNotFound', () => new MemberNotFoundError())

/**
 * MemberNotEligible: 'Member not eligible to vote'
 *
 * @category Errors
 * @category generated
 */
export class MemberNotEligibleError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'MemberNotEligible'
  constructor() {
    super('Member not eligible to vote')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MemberNotEligibleError)
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new MemberNotEligibleError())
createErrorFromNameLookup.set(
  'MemberNotEligible',
  () => new MemberNotEligibleError()
)

/**
 * DuplicateMember: 'Duplicate member'
 *
 * @category Errors
 * @category generated
 */
export class DuplicateMemberError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'DuplicateMember'
  constructor() {
    super('Duplicate member')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DuplicateMemberError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new DuplicateMemberError())
createErrorFromNameLookup.set(
  'DuplicateMember',
  () => new DuplicateMemberError()
)

/**
 * InvalidPermissions: 'Invalid permissions'
 *
 * @category Errors
 * @category generated
 */
export class InvalidPermissionsError extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'InvalidPermissions'
  constructor() {
    super('Invalid permissions')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidPermissionsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new InvalidPermissionsError())
createErrorFromNameLookup.set(
  'InvalidPermissions',
  () => new InvalidPermissionsError()
)

/**
 * ProposalExists: 'Proposal already exists'
 *
 * @category Errors
 * @category generated
 */
export class ProposalExistsError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'ProposalExists'
  constructor() {
    super('Proposal already exists')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ProposalExistsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new ProposalExistsError())
createErrorFromNameLookup.set('ProposalExists', () => new ProposalExistsError())

/**
 * InvalidProposalStatus: 'Invalid proposal status'
 *
 * @category Errors
 * @category generated
 */
export class InvalidProposalStatusError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'InvalidProposalStatus'
  constructor() {
    super('Invalid proposal status')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidProposalStatusError)
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new InvalidProposalStatusError())
createErrorFromNameLookup.set(
  'InvalidProposalStatus',
  () => new InvalidProposalStatusError()
)

/**
 * AlreadyVoted: 'Already voted'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyVotedError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'AlreadyVoted'
  constructor() {
    super('Already voted')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyVotedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new AlreadyVotedError())
createErrorFromNameLookup.set('AlreadyVoted', () => new AlreadyVotedError())

/**
 * NotEnoughApprovals: 'Not enough approvals'
 *
 * @category Errors
 * @category generated
 */
export class NotEnoughApprovalsError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'NotEnoughApprovals'
  constructor() {
    super('Not enough approvals')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotEnoughApprovalsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1778, () => new NotEnoughApprovalsError())
createErrorFromNameLookup.set(
  'NotEnoughApprovals',
  () => new NotEnoughApprovalsError()
)

/**
 * TimeLockNotExpired: 'Time lock not expired'
 *
 * @category Errors
 * @category generated
 */
export class TimeLockNotExpiredError extends Error {
  readonly code: number = 0x1779
  readonly name: string = 'TimeLockNotExpired'
  constructor() {
    super('Time lock not expired')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TimeLockNotExpiredError)
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new TimeLockNotExpiredError())
createErrorFromNameLookup.set(
  'TimeLockNotExpired',
  () => new TimeLockNotExpiredError()
)

/**
 * InvalidJoinProposalIndex: 'Invalid join proposal index'
 *
 * @category Errors
 * @category generated
 */
export class InvalidJoinProposalIndexError extends Error {
  readonly code: number = 0x177a
  readonly name: string = 'InvalidJoinProposalIndex'
  constructor() {
    super('Invalid join proposal index')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidJoinProposalIndexError)
    }
  }
}

createErrorFromCodeLookup.set(0x177a, () => new InvalidJoinProposalIndexError())
createErrorFromNameLookup.set(
  'InvalidJoinProposalIndex',
  () => new InvalidJoinProposalIndexError()
)

/**
 * IllegalAccountOwner: 'Account is not owned by Multisig program'
 *
 * @category Errors
 * @category generated
 */
export class IllegalAccountOwnerError extends Error {
  readonly code: number = 0x177b
  readonly name: string = 'IllegalAccountOwner'
  constructor() {
    super('Account is not owned by Multisig program')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IllegalAccountOwnerError)
    }
  }
}

createErrorFromCodeLookup.set(0x177b, () => new IllegalAccountOwnerError())
createErrorFromNameLookup.set(
  'IllegalAccountOwner',
  () => new IllegalAccountOwnerError()
)

/**
 * MissingAccount: 'Missing account'
 *
 * @category Errors
 * @category generated
 */
export class MissingAccountError extends Error {
  readonly code: number = 0x177c
  readonly name: string = 'MissingAccount'
  constructor() {
    super('Missing account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x177c, () => new MissingAccountError())
createErrorFromNameLookup.set('MissingAccount', () => new MissingAccountError())

/**
 * NotAMember: 'Provided pubkey is not a member of multisig'
 *
 * @category Errors
 * @category generated
 */
export class NotAMemberError extends Error {
  readonly code: number = 0x177d
  readonly name: string = 'NotAMember'
  constructor() {
    super('Provided pubkey is not a member of multisig')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotAMemberError)
    }
  }
}

createErrorFromCodeLookup.set(0x177d, () => new NotAMemberError())
createErrorFromNameLookup.set('NotAMember', () => new NotAMemberError())

/**
 * EmptyMembers: 'Members array is empty'
 *
 * @category Errors
 * @category generated
 */
export class EmptyMembersError extends Error {
  readonly code: number = 0x177e
  readonly name: string = 'EmptyMembers'
  constructor() {
    super('Members array is empty')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, EmptyMembersError)
    }
  }
}

createErrorFromCodeLookup.set(0x177e, () => new EmptyMembersError())
createErrorFromNameLookup.set('EmptyMembers', () => new EmptyMembersError())

/**
 * TooManyMembers: 'Too many members, can be up to 65535'
 *
 * @category Errors
 * @category generated
 */
export class TooManyMembersError extends Error {
  readonly code: number = 0x177f
  readonly name: string = 'TooManyMembers'
  constructor() {
    super('Too many members, can be up to 65535')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TooManyMembersError)
    }
  }
}

createErrorFromCodeLookup.set(0x177f, () => new TooManyMembersError())
createErrorFromNameLookup.set('TooManyMembers', () => new TooManyMembersError())

/**
 * NoVoters: 'Members don't include any voters'
 *
 * @category Errors
 * @category generated
 */
export class NoVotersError extends Error {
  readonly code: number = 0x1780
  readonly name: string = 'NoVoters'
  constructor() {
    super("Members don't include any voters")
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NoVotersError)
    }
  }
}

createErrorFromCodeLookup.set(0x1780, () => new NoVotersError())
createErrorFromNameLookup.set('NoVoters', () => new NoVotersError())

/**
 * StaleProposal: 'Proposal is stale'
 *
 * @category Errors
 * @category generated
 */
export class StaleProposalError extends Error {
  readonly code: number = 0x1781
  readonly name: string = 'StaleProposal'
  constructor() {
    super('Proposal is stale')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, StaleProposalError)
    }
  }
}

createErrorFromCodeLookup.set(0x1781, () => new StaleProposalError())
createErrorFromNameLookup.set('StaleProposal', () => new StaleProposalError())

/**
 * Unauthorized: 'Attempted to perform an unauthorized action'
 *
 * @category Errors
 * @category generated
 */
export class UnauthorizedError extends Error {
  readonly code: number = 0x1782
  readonly name: string = 'Unauthorized'
  constructor() {
    super('Attempted to perform an unauthorized action')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnauthorizedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1782, () => new UnauthorizedError())
createErrorFromNameLookup.set('Unauthorized', () => new UnauthorizedError())

/**
 * InvalidTransactionIndex: 'Invalid transaction index'
 *
 * @category Errors
 * @category generated
 */
export class InvalidTransactionIndexError extends Error {
  readonly code: number = 0x1783
  readonly name: string = 'InvalidTransactionIndex'
  constructor() {
    super('Invalid transaction index')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidTransactionIndexError)
    }
  }
}

createErrorFromCodeLookup.set(0x1783, () => new InvalidTransactionIndexError())
createErrorFromNameLookup.set(
  'InvalidTransactionIndex',
  () => new InvalidTransactionIndexError()
)

/**
 * InvalidAccount: 'Invalid account provided'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAccountError extends Error {
  readonly code: number = 0x1784
  readonly name: string = 'InvalidAccount'
  constructor() {
    super('Invalid account provided')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x1784, () => new InvalidAccountError())
createErrorFromNameLookup.set('InvalidAccount', () => new InvalidAccountError())

/**
 * InvalidNumberOfAccounts: 'Wrong number of accounts provided'
 *
 * @category Errors
 * @category generated
 */
export class InvalidNumberOfAccountsError extends Error {
  readonly code: number = 0x1785
  readonly name: string = 'InvalidNumberOfAccounts'
  constructor() {
    super('Wrong number of accounts provided')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidNumberOfAccountsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1785, () => new InvalidNumberOfAccountsError())
createErrorFromNameLookup.set(
  'InvalidNumberOfAccounts',
  () => new InvalidNumberOfAccountsError()
)

/**
 * RemoveLastMember: 'Attempted to remove last member'
 *
 * @category Errors
 * @category generated
 */
export class RemoveLastMemberError extends Error {
  readonly code: number = 0x1786
  readonly name: string = 'RemoveLastMember'
  constructor() {
    super('Attempted to remove last member')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, RemoveLastMemberError)
    }
  }
}

createErrorFromCodeLookup.set(0x1786, () => new RemoveLastMemberError())
createErrorFromNameLookup.set(
  'RemoveLastMember',
  () => new RemoveLastMemberError()
)

/**
 * AlreadyApproved: 'Member already approved the transaction'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyApprovedError extends Error {
  readonly code: number = 0x1787
  readonly name: string = 'AlreadyApproved'
  constructor() {
    super('Member already approved the transaction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyApprovedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1787, () => new AlreadyApprovedError())
createErrorFromNameLookup.set(
  'AlreadyApproved',
  () => new AlreadyApprovedError()
)

/**
 * AlreadyRejected: 'Member already rejected the transaction'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyRejectedError extends Error {
  readonly code: number = 0x1788
  readonly name: string = 'AlreadyRejected'
  constructor() {
    super('Member already rejected the transaction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyRejectedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1788, () => new AlreadyRejectedError())
createErrorFromNameLookup.set(
  'AlreadyRejected',
  () => new AlreadyRejectedError()
)

/**
 * AlreadyCancelled: 'Member already cancelled the transaction'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyCancelledError extends Error {
  readonly code: number = 0x1789
  readonly name: string = 'AlreadyCancelled'
  constructor() {
    super('Member already cancelled the transaction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyCancelledError)
    }
  }
}

createErrorFromCodeLookup.set(0x1789, () => new AlreadyCancelledError())
createErrorFromNameLookup.set(
  'AlreadyCancelled',
  () => new AlreadyCancelledError()
)

/**
 * AlreadyExecuted: 'Member already executed the transaction'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyExecutedError extends Error {
  readonly code: number = 0x178a
  readonly name: string = 'AlreadyExecuted'
  constructor() {
    super('Member already executed the transaction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyExecutedError)
    }
  }
}

createErrorFromCodeLookup.set(0x178a, () => new AlreadyExecutedError())
createErrorFromNameLookup.set(
  'AlreadyExecuted',
  () => new AlreadyExecutedError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
