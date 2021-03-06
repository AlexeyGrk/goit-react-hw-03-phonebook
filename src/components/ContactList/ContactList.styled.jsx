import styled from "@emotion/styled/macro";

export const ContactCtalog = styled.ul`
  padding: 5px;
`;
export const ContactListItem = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid black;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ContactListDeleteButton = styled.button`
  margin: 0 5px;
`;
