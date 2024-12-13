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
