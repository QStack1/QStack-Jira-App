import ForgeUI, { Fragment, SectionMessage, 
    Text, useState, Button, ModalDialog, Form, 
    Select, Option, Tooltip 
} from '@forge/ui';

export const BestResource = () => {
    const [isOpen, setOpen] = useState(false);
    const [isVoting, setVote] = useState(false);
    const [size, setSize] = useState("medium");
    const [pointVal, setPoint] = useState("?");

    return (
        <Fragment>            
            <SectionMessage title={`This ticket needs points! Your latest vote: ${pointVal}`} appearance="info">
                <Button text="Click to change." onClick={() => setVote(true)} />
                {isVoting && (
                    <ModalDialog header="Vote for this ticket!" onClose={() => setVote(false)}>
                        <Form onSubmit={data => {
                            setPoint(data.pointVal);
                            setVote(false);
                        }}>
                            <Select label="Vote with passion!" name="pointVal">
                                <Option label="0" value="0" />
                                <Option label="1" value="1" />
                                <Option label="3" value="3" />
                                <Option label="5" value="5" />
                                <Option label="8" value="8" />
                                <Option label="13" value="13" />
                                <Option label="?" value="?" />
                            </Select>
                        </Form>
                    </ModalDialog>
                )}
            </SectionMessage>            
        </Fragment>
    );
};